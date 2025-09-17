package chat

import (
	"context"
	"fmt"
	"os"

	"agents/internal/service"

	"github.com/sashabaranov/go-openai"
)

var (
	model = "deepseek-v3-1-250821"
)

type sClient struct {
	Client *openai.Client
}

func init() {
	service.RegisterClient(NewChatModels())
}

func NewChatModels() *sClient {
	return &sClient{}
}

func (cm sClient) GetDeepseekModel() *openai.Client {
	if cm.Client == nil {
		apiKey := os.Getenv("API_KEY")
		config := openai.DefaultConfig(apiKey)
		config.BaseURL = "https://ark.cn-beijing.volces.com/api/v3"
		cm.Client = openai.NewClientWithConfig(config)
	}

	return cm.Client
}

func (cm sClient) Query(question string) (string, error) {
	client := cm.GetDeepseekModel()
	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: model,
			Messages: []openai.ChatCompletionMessage{
				{
					Role:    openai.ChatMessageRoleSystem,
					Content: question,
				},
			},
		},
	)
	if err != nil {
		fmt.Printf("ChatCompletion error: %v\n", err)
		return "", err
	}
	return resp.Choices[0].Message.Content, nil
}
