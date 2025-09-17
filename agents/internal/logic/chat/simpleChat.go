package chat

import (
	"context"
	"fmt"

	"github.com/sashabaranov/go-openai"
)

var (
	model = "deepseek-v3-1-250821"
)

type sClient struct {
	Clients map[string]*openai.Client
}

//func init() {
//	service.RegisterAgg(NewChatModels())
//}

func NewChatModels() *sClient {
	return &sClient{}
}

func (cm *sClient) GetDeepseekModel(apiKey string) *openai.Client {
	if _, ok := cm.Clients[apiKey]; ok {
		config := openai.DefaultConfig(apiKey)
		config.BaseURL = "https://ark.cn-beijing.volces.com/api/v3"
		client := openai.NewClientWithConfig(config)
		cm.Clients[apiKey] = client
	}
	return cm.Clients[apiKey]
}

func (cm *sClient) Query(question, apiKey string) (string, error) {
	client := cm.GetDeepseekModel(apiKey)
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
