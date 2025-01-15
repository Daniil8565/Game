import { PageError } from '../../pages/PageError'
import error500Image from '../../assets/images/fixiki.png'

type GlobalErrorFallbackProps = {
  error: Error
  resetErrorBoundary: () => void
}

export const GlobalErrorFallback = ({
  error,
  resetErrorBoundary,
}: GlobalErrorFallbackProps) => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <PageError code={500} message={error.message} image={error500Image} />
    <button
      onClick={resetErrorBoundary}
      style={{ padding: '10px 20px', marginTop: '10px' }}>
      Retry
    </button>
  </div>
)
