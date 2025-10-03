package my_test

import (
	my_test "agents/api/my-test"
)

type ControllerV1 struct{}

func NewV1() my_test.IMyTestV1 {
	return &ControllerV1{}
}
