package main

import (
	_ "agents/internal/packed"

	_ "agents/internal/logic"

	"github.com/gogf/gf/v2/os/gctx"

	"agents/internal/cmd"
)

func main() {
	cmd.Main.Run(gctx.GetInitCtx())
}
