export type Shape = 'rock' | 'paper' | 'scissor';

export type PlayResponse = {
  isWinner: boolean;
  playerShape: string;
  otherShape: string;
  message: string;
};

export function useClient(
  baseUrl: string = 'https://apim-netivity-trendwatch-prod-euwe.azure-api.net/rock-paper-scissors'
) {
  return {
    getPlayers(): Promise<{ name: string; score: number }[] | null> {
      return get(baseUrl, '/GetPlayers');
    },

    play(playerName: string, shape: Shape): Promise<PlayResponse | null> {
      return post(baseUrl, '/Play', { playerName, shape });
    },
  };
}

async function get<T>(baseUrl: string, url: string): Promise<T | null> {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response;
    const json = await result.json();

    if (result.ok) {
      return json;
    } else {
      throw new Error('message' in json ? json.message : 'Unexpected error');
    }
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function post<T>(
  baseUrl: string,
  url: string,
  data: object
): Promise<T | null> {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response;
    const json = await result.json();

    if (result.ok) {
      return json;
    } else {
      throw new Error('message' in json ? json.message : 'Unexpected error');
    }
  } catch (e) {
    console.error(e);
    return null;
  }
}
