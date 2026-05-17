export function HomePage() {
  return (
    <section className="stack">
      <h1>홈</h1>
      <p>React 앱 기본 구조가 준비됐습니다.</p>

      <div className="card">
        <h2>포함된 것</h2>
        <ul className="list">
          <li>
            <strong>라우팅</strong>: `react-router-dom`
          </li>
          <li>
            <strong>레이아웃</strong>: `RootLayout` + `Outlet`
          </li>
          <li>
            <strong>페이지</strong>: Home / About / 404
          </li>
        </ul>
      </div>
    </section>
  )
}

