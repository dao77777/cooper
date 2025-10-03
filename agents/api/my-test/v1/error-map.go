package v1

import "github.com/gogf/gf/v2/frame/g"

type ErrorMapReq struct {
	g.Meta `path:"/error-map" tags:"error" method:"get" summary:"error map test"`
}

type ErrorMapRes struct{}
