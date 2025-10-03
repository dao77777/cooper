package my_test

import (
	v1 "agents/api/my-test/v1"
	"context"

	"github.com/gogf/gf/v2/errors/gcode"
	"github.com/gogf/gf/v2/errors/gerror"
)

func (c *ControllerV1) ErrorGError(ctx context.Context, req *v1.ErrorGErrorReq) (res *v1.ErrorGErrorRes, err error) {
	panic(gerror.NewCode(gcode.New(401, "Not Authorized", nil)))
}
