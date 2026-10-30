import {
  AtSign,
  Bot,
  Camera,
  CloudDownload,
  HardDrive,
  Heart,
  MessageCircle,
  Music2,
  NotebookPen,
  Play,
  Send,
  Share2,
  Timer,
  Webhook,
  X,
  type LucideIcon,
} from "lucide-react";

export type NodeItem = {
  name: string;
  description: string;
  icon: LucideIcon;
  iconStyle: string;
};

export type NodeGroup = {
  name: string;
  items: NodeItem[];
};

export const NODE_GROUPS: NodeGroup[] = [
  {
    name: "Соцсети",
    items: [
      {
        name: "Instagram",
        description: "Публикация поста",
        icon: Camera,
        iconStyle:
          "bg-[linear-gradient(145deg,#ffd86f,#ff4b80_48%,#7442d8)] text-white",
      },
      {
        name: "TikTok",
        description: "Публикация видео",
        icon: Music2,
        iconStyle: "bg-[#18202a] text-white",
      },
      {
        name: "YouTube",
        description: "Публикация видео",
        icon: Play,
        iconStyle: "bg-[#ff3838] text-white",
      },
      {
        name: "X (Twitter)",
        description: "Пост и ответы",
        icon: X,
        iconStyle: "bg-[#171b22] text-white",
      },
      {
        name: "Telegram",
        description: "Отправить сообщение",
        icon: Send,
        iconStyle: "bg-[#2aa8e8] text-white",
      },
      {
        name: "Threads",
        description: "Пост и аналитика",
        icon: AtSign,
        iconStyle: "bg-[#171b22] text-white",
      },
    ],
  },
  {
    name: "Действия",
    items: [
      {
        name: "Публикация",
        description: "Создать публикацию",
        icon: Send,
        iconStyle: "bg-white text-[#718096]",
      },
      {
        name: "Получение контента",
        description: "Загрузить материалы",
        icon: CloudDownload,
        iconStyle: "bg-white text-[#718096]",
      },
      {
        name: "Комментарии",
        description: "Ответить на комментарий",
        icon: MessageCircle,
        iconStyle: "bg-white text-[#718096]",
      },
      {
        name: "Лайки / Реакции",
        description: "Взаимодействия",
        icon: Heart,
        iconStyle: "bg-white text-[#718096]",
      },
      {
        name: "Аналитика",
        description: "Собрать статистику",
        icon: Share2,
        iconStyle: "bg-white text-[#718096]",
      },
      {
        name: "Задержка",
        description: "Подождать заданное время",
        icon: Timer,
        iconStyle: "bg-white text-[#718096]",
      },
    ],
  },
  {
    name: "Интеграции",
    items: [
      {
        name: "Google Drive",
        description: "Файлы и папки",
        icon: HardDrive,
        iconStyle: "bg-white text-[#0eaa75]",
      },
      {
        name: "Notion",
        description: "База данных",
        icon: NotebookPen,
        iconStyle: "bg-white text-[#222b37]",
      },
      {
        name: "OpenAI",
        description: "Генерация текста",
        icon: Bot,
        iconStyle: "bg-white text-[#253746]",
      },
      {
        name: "Webhook",
        description: "Внешний запрос",
        icon: Webhook,
        iconStyle: "bg-white text-[#d75a80]",
      },
    ],
  },
];
