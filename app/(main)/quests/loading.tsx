import { Loader } from "lucide-react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
    </div>
  );
}

export default Loading;
