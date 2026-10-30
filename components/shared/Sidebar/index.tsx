import { ChevronRight } from "lucide-react";
import { PAGES } from "./configs/PAGES";
import { Links } from "@/components/shared/data/Links/Links";

export default function Sidebar() {
  return (
    <aside className="app-sidebar z-10 flex w-[170px] shrink-0 basis-[170px] flex-col border-r border-[#e7eeed] bg-white px-[10px]">
      <a
        className="flex h-12 shrink-0 items-center gap-1 px-2"
        href={`#${PAGES.AUTOMATIONS}`}
        aria-label="WHITE — главная"
      >
        <span className="text-[21px] font-extrabold tracking-[-1.8px] text-[#00a77b]">
          W
        </span>
        <span className="sidebar-wordmark text-[18px] font-bold tracking-[-0.8px] text-[#17212e]">
          WHITE
        </span>
      </a>

      <nav aria-label="Основная навигация" className="mt-2 flex flex-col gap-1">
        {Links.map(({ icon: Icon, href, name }) => {
          const isActive = href === `#${PAGES.AUTOMATIONS}`;

          return (
            <a
              aria-current={isActive ? "page" : undefined}
              className={`sidebar-link group flex h-[34px] items-center gap-3 rounded-lg px-3 text-[11px] transition-colors ${
                isActive
                  ? "bg-[#e8f8f4] font-semibold text-[#009f78]"
                  : "text-[#5d6b7c] hover:bg-[#f4f8f7] hover:text-[#17212e]"
              }`}
              href={href}
              key={name}
            >
              <Icon className="size-[15px] shrink-0" strokeWidth={1.8} />
              <span className="sidebar-link-label truncate">{name}</span>
            </a>
          );
        })}
      </nav>

      <div className="sidebar-limits mt-auto mb-2 rounded-xl border border-[#edf3f2] bg-[#f7fbfa] p-3">
        <div className="mb-1 text-[10px] font-semibold text-[#00a078]">
          Лимиты
        </div>
        <div className="text-[9px] text-[#84919e]">12 / 50 запусков</div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#dcece8]">
          <div className="h-full w-1/4 rounded-full bg-[#00aa7f]" />
        </div>
      </div>

      <div className="flex h-[84px] shrink-0 flex-col justify-center border-t border-[#edf1f0] px-2">
        <div className="flex items-center gap-1">
          <span className="text-[18px] font-extrabold tracking-[-1.5px] text-[#00a77b]">
            W
          </span>
          <span className="sidebar-wordmark text-[15px] font-bold tracking-[-0.7px] text-[#17212e]">
            WHITE
          </span>
        </div>
        <div className="sidebar-version mt-1 text-[9px] text-[#8b98a5]">
          v1.0.0
        </div>
        <a
          className="mt-1 hidden items-center justify-between text-[10px] text-[#627183]"
          href="#profile"
        >
          <span>Мой профиль</span>
          <ChevronRight className="size-3" />
        </a>
      </div>
    </aside>
  );
}
