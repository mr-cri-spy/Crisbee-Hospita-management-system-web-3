export function sendNotification({ channel, recipient, message }) {
  return {
    channel,
    recipient,
    message,
    status: 'mocked_sent',
    at: new Date().toISOString()
  };
}
