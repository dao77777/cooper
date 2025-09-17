package hello

import (
	"context"

	"agents/internal/service"

	"github.com/gogf/gf/v2/frame/g"

	"agents/api/hello/v1"
)

func (c *ControllerV1) Hello(ctx context.Context, req *v1.HelloReq) (res *v1.HelloRes, err error) {
	client := service.Client()
	ans, err := client.Query(req.Question)
	g.RequestFromCtx(ctx).Response.Writeln(ans)
	return
}
