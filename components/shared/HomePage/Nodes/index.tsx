import { NODE_GROUPS, type NodeItem } from '@/components/shared/data/Nodes/Nodes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronUp, Search, X } from 'lucide-react';

type NodesProps = {
  selectedNode: string;
  onSelectNode: (name: string) => void;
};

function NodeIcon({ item }: { item: NodeItem }) {
  const Icon = item.icon;

  return (
    <span
      className={`grid size-[27px] shrink-0 place-items-center rounded-[8px] ${item.iconStyle}`}>
      <Icon className="size-[16px]" strokeWidth={2} />
    </span>
  );
}

export { NodeIcon };

export default function Nodes({ selectedNode, onSelectNode }: NodesProps) {
  return (
    <aside className="nodes-panel flex w-[168px] shrink-0 basis-[168px] flex-col border-r border-[#e7eeed] bg-white">
      <div className="flex h-[38px] shrink-0 items-center justify-between px-3">
        <h1 className="text-[12px] font-semibold">Узлы</h1>
        <Button
          aria-label="Свернуть список узлов"
          className="size-6 text-[#8895a4]"
          size="icon-xs"
          variant="ghost">
          <X />
        </Button>
      </div>
      <div className="px-2 pb-2">
        <label className="relative block">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3 -translate-y-1/2 text-[#8b98a6]" />
          <Input
            aria-label="Поиск узлов"
            className="h-[27px] rounded-md border-[#e5eceb] pl-7 text-[10px] shadow-none  focus-visible:ring-2"
            placeholder="Поиск узлов..."
          />
        </label>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-3">
        {NODE_GROUPS.map((group) => (
          <section className="mb-3" key={group.name}>
            <div className="mb-1 flex h-[22px] items-center justify-between px-0.5">
              <h2 className="text-[10px] font-medium text-[#8190a0]">{group.name}</h2>
              <ChevronUp className="size-3 text-[#9aa5b1]" />
            </div>
            <div className="flex flex-col gap-1">
              {group.items.map((item) => {
                const isSelected = selectedNode === item.name;

                return (
                  <button
                    aria-pressed={isSelected}
                    className={`flex h-[34px] min-w-0 items-center gap-2 rounded-md px-2 text-left transition-colors ${
                      isSelected
                        ? 'bg-[#eef9f6] ring-1 ring-[#d5f0e9]'
                        : 'bg-[#f8fafb] hover:bg-[#f0f5f4]'
                    }`}
                    key={item.name}
                    onClick={() => onSelectNode(item.name)}
                    type="button">
                    <NodeIcon item={item} />
                    <span className="truncate text-[9px] font-medium text-[#3d4b5c]">
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}
