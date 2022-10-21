import * as express from "express";

export async function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<{ name: string } | undefined> {
  if (securityName === 'user') {
    if (request.query.user) return {
      name: request.query.user as string
    } 
    throw new Error('not user query param')
  }
}