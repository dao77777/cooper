package v1

import "github.com/gogf/gf/v2/frame/g"

type ErrorReq struct {
	g.Meta `path:"/error" tags:"error" method:"get" summary:"error test"`
}

type ErrorRes struct{}
