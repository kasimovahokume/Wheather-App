// Timestamp-i tarixə çevir (01/31/2023)
export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US");
};

// Timestamp-i vaxta çevir (12:36)
export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};