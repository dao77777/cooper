package v1

import (
	"github.com/gogf/gf/v2/frame/g"
)

type HelloReq struct {
	g.Meta   `path:"/" tags:"Hello" method:"get" summary:"Your first hello api"`
	Question string `json:"question"`
}
type HelloRes struct {
	g.Meta `mime:"text/html" example:"string"`
	Answer string `json:"answer"`
}
