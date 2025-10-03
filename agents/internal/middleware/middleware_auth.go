package middleware

import (
	"fmt"

	"github.com/gogf/gf/v2/net/ghttp"
)

func Auth(r *ghttp.Request) {
	fmt.Println("Auth Middleware: TODO")
	r.Middleware.Next()
}
