package v1

import (
	"github.com/gogf/gf/v2/frame/g"
)

type MyTestReq struct {
	g.Meta `path:"/" tags:"my-test" method:"get" summary:"my-test"`
}

type MyTestRes struct {
	A string `json:"a"`
	B string `json:"b"`
	C string `json:"c"`
}
