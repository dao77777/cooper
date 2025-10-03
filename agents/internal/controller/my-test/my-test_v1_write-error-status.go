package my_test

import (
	v1 "agents/api/my-test/v1"
	"context"

	"github.com/gogf/gf/v2/frame/g"
)

func (c *ControllerV1) WriteErrorStatus(ctx context.Context, req *v1.WriteErrorStatusReq) (res *v1.WriteErrorStatusRes, err error) {
	rawRequest := g.RequestFromCtx(ctx)
	rawRequest.Response.WriteStatus(500)
	rawRequest.Response.Writeln("\nwrite error status test")
	return
}
