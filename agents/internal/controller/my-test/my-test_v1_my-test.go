package my_test

import (
	v1 "agents/api/my-test/v1"
	"context"
)

func (c *ControllerV1) MyTest(ctx context.Context, req *v1.MyTestReq) (res *v1.MyTestRes, err error) {
	res = &v1.MyTestRes{
		A: "a",
		B: "b",
		C: "c",
	}
	return
}
