// types.ts

// 等级类型：只能是这三个字符串之一
export type LogLevel = 'info' | 'warn' | 'error';

// 一条日志的输入结构
export interface LogInput {
  content: string;
  level: LogLevel;
}
