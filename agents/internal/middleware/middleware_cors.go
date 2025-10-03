package middleware

import (
	"fmt"

	"github.com/gogf/gf/v2/net/ghttp"
)

func CORS(r *ghttp.Request) {
	fmt.Println("CORS Middleware")
	r.Response.CORSDefault()
	r.Middleware.Next()
}
