package v1

import "github.com/gogf/gf/v2/frame/g"

type ErrorStringReq struct {
	g.Meta `path:"/error-string" tags:"error" method:"get" summary:"error string test"`
}

type ErrorStringRes struct{}
