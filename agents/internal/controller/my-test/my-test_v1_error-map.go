package my_test

import (
	v1 "agents/api/my-test/v1"
	"context"
)

func (c *ControllerV1) ErrorMap(ctx context.Context, req *v1.ErrorMapReq) (res *v1.ErrorMapRes, err error) {
	panic(map[string]string{"error": "test"})
}
