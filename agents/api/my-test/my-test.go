package my_test

import (
	"context"

	v1 "agents/api/my-test/v1"
)

type IMyTestV1 interface {
	MyTest(ctx context.Context, req *v1.MyTestReq) (res *v1.MyTestRes, err error)
	Error(ctx context.Context, req *v1.ErrorReq) (res *v1.ErrorRes, err error)
	ErrorGError(ctx context.Context, req *v1.ErrorGErrorReq) (res *v1.ErrorGErrorRes, err error)
	ErrorMap(ctx context.Context, req *v1.ErrorMapReq) (res *v1.ErrorMapRes, err error)
	ErrorString(ctx context.Context, req *v1.ErrorStringReq) (res *v1.ErrorStringRes, err error)
	WriteErrorStatus(ctx context.Context, req *v1.WriteErrorStatusReq) (res *v1.WriteErrorStatusRes, err error)
}
