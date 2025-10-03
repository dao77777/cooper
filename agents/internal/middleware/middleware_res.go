package middleware

import (
	"encoding/json"
	"fmt"

	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/net/ghttp"
)

func Res(r *ghttp.Request) {
	fmt.Println("Response Middleware")
	r.Middleware.Next()

	r.Response.ClearBuffer()

	res := map[string]any{
		"code": 200,
		"msg":  "ok",
		"data": nil,
	}

	if err := r.GetError(); err != nil {
		errWithCode := gerror.Code(err)

		res["code"] = map[bool]int{true: 500, false: errWithCode.Code()}[errWithCode.Code() == 68]
		res["msg"] = map[bool]string{true: "Internal Server Error", false: errWithCode.Message()}[errWithCode.Code() == 68]

		r.Response.WriteStatus(res["code"].(int))
		r.Response.WriteOver()
		r.Response.WriteJson(res)
	} else {
		res["code"] = 200
		res["msg"] = "ok"
		res["data"] = r.GetHandlerResponse()

		r.Response.WriteStatus(res["code"].(int))
		r.Response.WriteOver()
		r.Response.WriteJson(res)
	}

	jsonStr, _ := json.MarshalIndent(res, "", "  ")
	fmt.Printf("Response: %+v\n", string(jsonStr))
}
