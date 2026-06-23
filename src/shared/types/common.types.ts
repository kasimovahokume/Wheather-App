// API error structure
export interface ApiError {
  message: string;
  status?: number;
}

// Status type for async operations
export type Status = "idle" | "loading" | "success" | "error";