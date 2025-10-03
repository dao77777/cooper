package v1

import "github.com/gogf/gf/v2/frame/g"

type ErrorGErrorReq struct {
	g.Meta `path:"/error-gerror" tags:"error" method:"get" summary:"error gerror test"`
}

type ErrorGErrorRes struct{}
