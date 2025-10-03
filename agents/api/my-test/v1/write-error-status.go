package v1

import "github.com/gogf/gf/v2/frame/g"

type WriteErrorStatusReq struct {
	g.Meta `path:"/write-error-status" tags:"error" method:"get" summary:"write error status test"`
}

type WriteErrorStatusRes struct{}
