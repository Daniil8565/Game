import error500Image from '../../image/fixiki.png'
import { PageError } from '../../pages/PageError'

type GlobalErrorFallbackProps = {
  error: Error
  resetErrorBoundary: () => void
}

const GlobalErrorFallback: React.FC<GlobalErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <PageError code={500} message={error.message} image={error500Image} />
    <button onClick={resetErrorBoundary} style={{ padding: '10px 20px' }}>
      Retry
    </button>
  </div>
)
export { GlobalErrorFallback }
