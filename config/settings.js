import 'dotenv/config';

export const LINEAR_API_URL = 'https://api.linear.app/graphql';
export const LINEAR_TEAM_KEY = process.env.MAGAZINE_LINEAR_TEAM_KEY || 'YOUR_TEAM';

export const LABEL_GROUPS = {
  parentStatus: '規格文書作成',
  subIssueStatus: '規格文書作成',
};

export const STATUS_LABELS = {
  stock: '1.作業ストック',
  composition: '2.文書構成作成中',
  manuscript: '3.文書執筆中',
  video: '4.文書承認中',
};

// 隔週サイクル計算の基準日（月曜日）。自分のプロジェクトに合わせて変更してください
export const BIWEEKLY_EPOCH = new Date(2026, 0, 5);

// タイトルの装飾変換ルール。自分のプロジェクトに合わせて変更してください
export const TITLE_EMOJI_RULES = [
  { pattern: /【通常[^】]*】/g, emoji: '☕' },
  { pattern: /【(トピック|ニュース)[^】]*】/g, emoji: '🌐' },
  { pattern: /【教養[^】]*】/g, emoji: '🌐' },
];
