"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Command,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Skeleton } from "@/components/ui/skeleton";
import { ComponentsData } from "@/lib/data";
import { ComponentDataType } from "@/types/components-data";
import { useRouter } from "next/navigation";

export function MobileSearchBox() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [data, setData] = React.useState<ComponentDataType[] | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (debouncedQuery.length <= 0) {
      setData(null);
      return;
    }
    if (debouncedQuery) {
      setLoading(true);
      setTimeout(() => {
        const result = ComponentsData.filter((item) =>
          item.title.toLowerCase().includes(debouncedQuery.toLowerCase())
        );
        setData(result);
        setLoading(false);
      }, 300);
    }
  }, [debouncedQuery]);

  return (
    <>
      <Button
        variant="outline"
        className="relative size-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Search className="size-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search projects...</span>
        <span className="sr-only">Search projects</span>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          if (!open) {
            setQuery("");
          }
        }}
      >
        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
          <CommandInput
            placeholder="Search projects..."
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            <CommandEmpty
              className={cn(loading ? "hidden" : "py-6 text-center text-sm")}
            >
              No Component found.
            </CommandEmpty>
            {loading ? (
              <div className="space-y-1 overflow-hidden px-1 py-2">
                <Skeleton className="h-4 w-10 rounded" />
                <Skeleton className="h-8 rounded-sm" />
                <Skeleton className="h-8 rounded-sm" />
              </div>
            ) : (
              data?.map((item) => (
                <>
                  <CommandGroup
                    key={item.name}
                    title={"Components"}
                    className="capitalize"
                  >
                    <CommandItem
                      className="cursor-pointer"
                      value={item.title}
                      onSelect={() => {
                        setOpen(false);
                        router.push(item.link);
                      }}
                    >
                      <span className="truncate">{item.title}</span>
                      <CommandShortcut>⌘↵</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                </>
              )) ?? null
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
