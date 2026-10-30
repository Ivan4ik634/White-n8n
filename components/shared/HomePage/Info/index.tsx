"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronRight,
  FileText,
  Image as ImageIcon,
  Settings2,
  UserRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  FIRST_COMMENT,
  INSPECTOR_TABS,
  POST_TEXT,
} from "@/components/shared/data/Info/InspectorTabs";
import { NodeIcon } from "../Nodes";
import type { NodeItem } from "@/components/shared/data/Nodes/Nodes";

type InfoProps = {
  activeNode: NodeItem;
};

export default function Info({ activeNode }: InfoProps) {
  const [activeTab, setActiveTab] = useState<(typeof INSPECTOR_TABS)[number]>(
    INSPECTOR_TABS[0],
  );
  const [commentEnabled, setCommentEnabled] = useState(true);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <aside className="inspector-panel flex w-[262px] shrink-0 flex-col border-l border-[#e7eeed] bg-white">
      <div className="flex h-[56px] shrink-0 items-center gap-3 px-4">
        <NodeIcon item={activeNode} />
        <div className="min-w-0 flex-1">
          <div className="truncate text-[11px] font-semibold">
            {activeNode.name}
          </div>
          <div className="mt-0.5 truncate text-[9px] text-[#8491a0]">
            {activeNode.description}
          </div>
        </div>
        <Button
          aria-label="Закрыть настройки узла"
          className="size-6 text-[#8491a0]"
          size="icon-xs"
          variant="ghost"
        >
          <X />
        </Button>
      </div>

      <div className="flex shrink-0 border-b border-[#edf1f0] px-3">
        {INSPECTOR_TABS.map((tab) => (
          <button
            aria-current={activeTab === tab ? "page" : undefined}
            className={`relative h-[32px] flex-1 whitespace-nowrap px-1 text-[9px] transition-colors ${
              activeTab === tab
                ? "font-semibold text-[#009f78] after:absolute after:right-1 after:bottom-0 after:left-1 after:h-[2px] after:rounded-full after:bg-[#00aa7e]"
                : "text-[#718092] hover:text-[#263547]"
            }`}
            key={tab}
            onClick={() => setActiveTab(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-3.5 py-3">
        {activeTab === INSPECTOR_TABS[0] ? (
          <div className="space-y-3">
            <section>
              <label className="mb-1.5 block text-[9px] font-semibold text-[#00a078]">
                Аккаунт
              </label>
              <button
                className="flex h-[29px] w-full items-center gap-2 rounded-md border border-[#e5eceb] px-2 text-left text-[9px] text-[#526172] hover:bg-[#fbfdfd]"
                type="button"
              >
                <span className="grid size-4 place-items-center rounded-full bg-[#e9eef2]">
                  <UserRound className="size-2.5 text-[#8190a0]" />
                </span>
                <span className="flex-1">@white.content</span>
                <ChevronDown className="size-3 text-[#8190a0]" />
              </button>
            </section>

            <section>
              <label
                className="mb-1.5 block text-[9px] font-semibold text-[#3c4a5b]"
                htmlFor="post-copy"
              >
                Текст поста
              </label>
              <Textarea
                className="min-h-[58px] resize-none rounded-md border-[#e5eceb] px-2 py-1.5 text-[9px] leading-[1.55] shadow-none focus-visible:ring-2"
                defaultValue={POST_TEXT}
                id="post-copy"
              />
              <div className="mt-1 text-right text-[8px] text-[#93a0ad]">
                {POST_TEXT.length}/2200
              </div>
            </section>

            <section>
              <div className="mb-1.5 text-[9px] font-semibold text-[#3c4a5b]">
                Изображение / Видео
              </div>
              <div className="flex h-[52px] items-center gap-2 rounded-md border border-[#e5eceb] px-1.5">
                <div className="media-preview grid size-10 shrink-0 place-items-center overflow-hidden rounded">
                  <ImageIcon className="size-4 text-white/85" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[9px] font-medium text-[#455365]">
                    post.jpg
                  </div>
                  <div className="mt-1 text-[8px] text-[#91a0ad]">2.4 MB</div>
                </div>
                <Button
                  aria-label="Удалить изображение"
                  className="size-6 text-[#8c99a6]"
                  size="icon-xs"
                  variant="ghost"
                >
                  <X />
                </Button>
              </div>
            </section>

            <section>
              <label className="flex cursor-pointer items-center gap-2 text-[9px] text-[#465466]">
                <Switch
                  checked={commentEnabled}
                  onCheckedChange={setCommentEnabled}
                />
                Добавить первый комментарий
              </label>
              {commentEnabled && (
                <>
                  <Textarea
                    aria-label="Первый комментарий"
                    className="mt-2 min-h-[42px] resize-none rounded-md border-[#e5eceb] px-2 py-1.5 text-[9px] leading-4 shadow-none focus-visible:ring-2"
                    defaultValue={FIRST_COMMENT}
                  />
                  <div className="mt-1 text-right text-[8px] text-[#93a0ad]">
                    {FIRST_COMMENT.length}/500
                  </div>
                </>
              )}
            </section>

            <section className="border-t border-[#edf1f0] pt-2">
              <button
                aria-expanded={showAdvanced}
                className="flex w-full items-center gap-2 py-1 text-left text-[9px] font-semibold text-[#536173]"
                onClick={() => setShowAdvanced((open) => !open)}
                type="button"
              >
                <Settings2 className="size-3.5 text-[#7b8998]" />
                Дополнительные настройки
                <ChevronRight
                  className={`ml-auto size-3 text-[#8491a0] transition-transform ${
                    showAdvanced ? "rotate-90" : ""
                  }`}
                />
              </button>
              {showAdvanced && (
                <p className="pt-1 pl-5 text-[9px] leading-4 text-[#8996a3]">
                  Параметры публикации для выбранного аккаунта.
                </p>
              )}
            </section>
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-[#dfe8e6] bg-[#fbfdfc] p-4 text-center">
            <div className="mx-auto mb-2 grid size-8 place-items-center rounded-full bg-[#eaf7f3] text-[#00a078]">
              {activeTab === INSPECTOR_TABS[1] ? (
                <FileText className="size-4" />
              ) : (
                <Check className="size-4" />
              )}
            </div>
            <p className="text-[10px] font-medium text-[#536173]">
              {activeTab === INSPECTOR_TABS[1]
                ? "Данные появятся после запуска"
                : "Результат появится после запуска"}
            </p>
            <p className="mt-1 text-[9px] leading-4 text-[#8a97a4]">
              Здесь будет информация о выбранном узле.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
