package main

import (
	_ "agents/internal/packed"

	"github.com/gogf/gf/v2/os/gctx"

	"agents/internal/cmd"
)

func main() {
	cmd.Main.Run(gctx.GetInitCtx())
}
