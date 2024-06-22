import cookie from 'js-cookie'

class ApiClient {
  private cookie = 'None'

  /** API GET */
  public async get<T>(path: string, customHeaders?: HeadersInit): Promise<T> {
    const header = {
      ...customHeaders,
    }

    cookie.set('SameSite', this.cookie, { secure: true })

    const res = await fetch(`${path}`, {
      method: 'GET',
      headers: header,
    })

    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`)
    }

    return res.json() as Promise<T>
  }

  /** API POST */
  public static async post<T, T2>(path: string, body?: T2): Promise<T> {
    const res = await fetch(`${path}`, {
      method: 'POST',
      body: body ? JSON.stringify(body) : null,
      // credentials: 'include',
    })
    return res.json() as Promise<T>
  }
}

export default ApiClient
