class ConsumerQueueNotFoundError implements Error {
  public name = 'ConsumerQueueNotFoundError';

  public message: string;

  public stack = new Error().stack;

  public constructor(consumerName: string) {
    this.message = `There's no consumer queue registered with name ${consumerName}`;
  }
}

export { ConsumerQueueNotFoundError };
