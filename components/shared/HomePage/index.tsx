"use client";

import { useState } from "react";
import {
  Bell,
  ChevronDown,
  History,
  MoreHorizontal,
  UserRound,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/shared/Sidebar";
import Info from "./Info";
import Nodes from "./Nodes";
import { NODE_GROUPS } from "@/components/shared/data/Nodes/Nodes";

export default function HomePage() {
  const [selectedNode, setSelectedNode] = useState("Instagram");
  const [isRunning, setIsRunning] = useState(false);
  const activeNode =
    NODE_GROUPS.flatMap((group) => group.items).find(
      (item) => item.name === selectedNode,
    ) ?? NODE_GROUPS[0].items[0];

  return (
    <div className="flex h-dvh min-h-[620px] w-full overflow-hidden bg-white text-[#1d2938]">
      <Sidebar />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-12 shrink-0 items-center justify-between border-b border-[#e7eeed] bg-white px-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="flex min-w-0 items-center gap-2 text-[11px] font-semibold">
              <Zap className="size-[14px] shrink-0 text-[#718096]" />
              <span className="truncate">Social Growth Flow</span>
              <ChevronDown className="size-3 shrink-0 text-[#778596]" />
            </div>
            <span className="hidden h-4 w-px bg-[#e6eceb] sm:block" />
            <span className="flex shrink-0 items-center gap-1.5 text-[10px] font-medium text-[#00a078]">
              <span className="size-1.5 rounded-full bg-[#00b782]" />
              Активна
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <Button
              aria-label="История запусков"
              className="text-[#627183]"
              size="icon-sm"
              variant="ghost"
            >
              <History />
            </Button>
            <Button
              aria-label="Дополнительные действия"
              className="text-[#627183]"
              size="icon-sm"
              variant="ghost"
            >
              <MoreHorizontal />
            </Button>
            <Button
              className="ml-1 h-[30px] bg-[#00a87a] px-3 text-[10px] text-white hover:bg-[#008d68]"
              onClick={() => setIsRunning((running) => !running)}
            >
              <Zap className="size-3" />
              {isRunning ? "Запущено" : "Запустить"}
            </Button>
            <Button
              aria-label="Уведомления"
              className="ml-1 text-[#627183]"
              size="icon-sm"
              variant="ghost"
            >
              <Bell />
            </Button>
            <span className="ml-1 grid size-[22px] place-items-center rounded-full bg-[#8997a6] text-white">
              <UserRound className="size-3" />
            </span>
          </div>
        </header>

        <div className="flex min-h-0 flex-1">
          <Nodes selectedNode={selectedNode} onSelectNode={setSelectedNode} />

          <section
            aria-label="Рабочая область автоматизации"
            className="workspace-grid relative min-w-0 flex-1"
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.28),transparent_14%,transparent_86%,rgba(255,255,255,0.28))]" />
          </section>

          <Info activeNode={activeNode} />
        </div>
      </main>
    </div>
  );
}
