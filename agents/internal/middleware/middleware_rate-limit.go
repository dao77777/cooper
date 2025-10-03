package middleware

import (
	"fmt"

	"github.com/gogf/gf/v2/net/ghttp"
)

func RateLimit(r *ghttp.Request) {
	fmt.Println("RateLimit Middleware: TODO")
	r.Middleware.Next()
}
