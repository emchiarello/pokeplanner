interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  message?: string;
}

export function LoadingSpinner({ size = 40, color = '#3498db', message }: LoadingSpinnerProps) {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  };

  const loaderStyle: React.CSSProperties = {
    width: size,
    height: size,
    border: `4px solid #f3f3f3`,
    borderTop: `4px solid ${color}`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={containerStyle}>
      <div style={loaderStyle} />
      {message && <p style={{ marginTop: '10px', fontFamily: 'sans-serif' }}>{message}</p>}

      {/* Keyframes für die Animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};