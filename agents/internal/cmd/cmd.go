package cmd

import (
	"context"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/os/gcmd"

	"agents/internal/controller/hello"
	my_test "agents/internal/controller/my-test"
	"agents/internal/middleware"
)

var (
	Main = gcmd.Command{
		Name:  "main",
		Usage: "main",
		Brief: "start http server",
		Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {
			s := g.Server()
			s.SetPort(8000)
			s.Group("/", func(group *ghttp.RouterGroup) {
				group.Middleware(
					middleware.CORS,
					middleware.Res,
					middleware.Auth,
				)
				group.Group("/hello", func(group *ghttp.RouterGroup) {
					group.Bind(
						hello.NewV1(),
					)
				})
				group.Group("/my-test", func(group *ghttp.RouterGroup) {
					group.Bind(
						my_test.NewV1(),
					)
				})
			})
			s.SetOpenApiPath("/api.json")
			s.SetSwaggerPath("/swagger")
			s.Run()
			return nil
		},
	}
)
