// submit.ts
import type { LogInput, LogLevel, LogRow } from './type';

// 获取元素（as 是断言：告诉 TS 这就是个表单元素）
const form = document.getElementById('myForm') as HTMLFormElement;
const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
const resultBox = document.getElementById('result') as HTMLDivElement;

// 合法等级清单
const VALID_LEVELS: LogLevel[] = ['info', 'warn', 'error'];

form.addEventListener('submit', (e: Event) => {
  // 阻止默认提交（你已完成的部分，保持不变）
  e.preventDefault();

  // 1. 取表单原始数据 —— 注意：此时它们都只是 string（宽类型）
  const rawContent: string =
    (form.elements.namedItem('content') as HTMLTextAreaElement).value.trim();
  const rawLevel: string =
    (form.elements.namedItem('level') as HTMLSelectElement).value;

  // 2. 内容校验
  if (rawContent.length < 10) {
    showResult('内容至少需要10个字！', false);
    return;
  }

  // 3. ★ 核心考点：类型收窄 ★
  //    rawLevel 是 string，不能直接赋给 LogInput.level
  //    必须先验证它在合法清单里
  if (!VALID_LEVELS.includes(rawLevel as LogLevel)) {
    showResult('等级不合法！', false);
    return;
  }

  // 4. 装配成符合接口的对象（此时 TS 才放行）
  const logInput: LogInput = {
    content: rawContent,
    level: rawLevel as LogLevel,
  };

  // 5. 发送（你已完成的部分，只是 body 换成 JSON 格式）
  submitBtn.disabled = true;
  submitBtn.textContent = '提交中...';

  fetch('http://localhost:8000/api/logs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(logInput),
  })
    .then((res) => {
      if (!res.ok) throw new Error('服务器错误：' + res.status);
      return res.json();
    })
    // 处理返回的 JSON 数据
    // POST 成功后，新的日志会马上出现在 <ul> 中
    .then(async () => {
      showResult('✅ 提交成功！', true);
      form.reset();
      await loadLogs();
    })
    .catch((err) => {
      showResult('❌ 提交失败：' + err.message, false);
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = '提 交';
    });
});

function showResult(message: string, isSuccess: boolean): void {
  resultBox.textContent = message;
  resultBox.className = isSuccess ? 'success' : 'error';
}

// 6. 类型保护函数：判断一个对象是否符合 LogRow 接口
// res.json() 得到的数据不能直接相信，只有通过 isLogRow 检查的数据才允许渲染。
function isLogRow(x: unknown): x is LogRow {
  if (typeof x !== 'object' || x === null) {
    return false;
  }

  const row = x as Record<string, unknown>;

  return (
    typeof row.content === 'string' &&
    (row.level === 'info' ||
      row.level === 'warn' ||
      row.level === 'error')
  );
}

// 7. 加载日志列表
function getLogList(): HTMLUListElement {
  const element = document.querySelector<HTMLUListElement>('#logList');

  if (!element) {
    throw new Error('找不到日志列表元素');
  }

  return element;
}

async function loadLogs(): Promise<void> {
  try {
    const response = await fetch('http://localhost:8000/api/logs');

    if (!response.ok) {
      throw new Error(`服务器错误：${response.status}`);
    }

    const payload: unknown = await response.json();

    if (!Array.isArray(payload)) {
      throw new Error('服务器返回的数据不是数组');
    }

    const logs = payload.filter(isLogRow);

    logList.replaceChildren();

    for (const log of logs) {
      const item = document.createElement('li');
      item.textContent = `[${log.level}] ${log.content}`;
      logList.appendChild(item);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : '未知错误';
    showResult(`❌ 日志加载失败：${message}`, false);
  }
}

loadLogs();