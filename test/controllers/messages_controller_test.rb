require "test_helper"

class MessagesControllerTest < ActionDispatch::IntegrationTest
  test "should get body:string" do
    get messages_body:string_url
    assert_response :success
  end
end
