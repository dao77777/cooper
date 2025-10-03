package my_test

import (
	v1 "agents/api/my-test/v1"
	"context"
)

func (c *ControllerV1) ErrorString(ctx context.Context, req *v1.ErrorStringReq) (res *v1.ErrorStringRes, err error) {
	panic("ErrorString test")
}
