package my_test

import (
	v1 "agents/api/my-test/v1"
	"context"

	"github.com/gogf/gf/v2/errors/gcode"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
)

func (c *ControllerV1) Error(ctx context.Context, req *v1.ErrorReq) (res *v1.ErrorRes, err error) {
	rawRequest := g.RequestFromCtx(ctx)
	rawRequest.Response.Writeln("error test")
	panic(gerror.NewCode(gcode.New(401, "Not Authorized", nil)))
	// panic(map[string]string{"error": "test"})
}
