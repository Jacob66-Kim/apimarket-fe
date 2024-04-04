import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-10">
        <div className="container flex items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-1">
            <p className="text-sm font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
              최고의 API를 맞춤 제작해 드립니다!
            </p>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center gap-8 px-4 text-center md:px-6 lg:gap-12">
            <div className="space-y-2">
            <img
              alt="Tailored API"
              className="rounded-3xl overflow-hidden object-center object-cover"
              height="450"
              src="/customapi.jpg"
              style={{
                aspectRatio: "800/450",
                objectFit: "cover",
              }}
              width="800"
            />
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">API 맞춤제작소</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                애플리케이션을 구축하기 위해 필요한 API를 제작해 드립니다.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                혁신을 위한 플랫폼
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                우리는 개발자들이 창의력을 발휘하고 미래를 구축할 수 있도록 API를 제공합니다.
              </p>
            </div>
            <img
              alt="Platform for Innovation"
              className="rounded-3xl overflow-hidden object-center object-cover mx-auto"
              height="400"
              src="/innovation.jpg"
              style={{
                aspectRatio: "900/400",
                objectFit: "cover",
              }}
              width="900"
            />
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <img
              alt="Discover APIs"
              className="rounded-3xl overflow-hidden object-center object-cover"
              height="450"
              src="/discovering.jpg"
              style={{
                aspectRatio: "800/450",
                objectFit: "cover",
              }}
              width="800"
            />
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">놀라운 API 발견하기</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                우리 플랫폼은 여러분의 프로젝트에 완벽한 API를 찾기 쉽게 만듭니다.
              </p>
            </div>
          </div>
        </section>
        <section className="grid w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <img
              alt="Discover APIs"
              className="rounded-3xl overflow-hidden object-center object-cover"
              height="450"
              src="/testwithconfidence.jpg"
              style={{
                aspectRatio: "800/450",
                objectFit: "cover",
              }}
              width="800"
            />
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">자신감을 가지고 테스트하세요.</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                우리의 통합 테스트 환경은 여러분이 커밋하기 전에 API를 실험해 볼 수 있게 해줍니다.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <img
              alt="Discover APIs"
              className="rounded-3xl overflow-hidden object-center object-cover"
              height="800"
              src="/integrate.jpg"
              style={{
                aspectRatio: "800/800",
                objectFit: "cover",
              }}
              width="800"
            />
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">간편하게 통합하세요.</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                API MARKET은 여러분의 애플리케이션에 API를 추가하는 것을 간단하게 만듭니다.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-10">
        <div className="container grid md:grid-cols-3 items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-2">
            <img
              alt="API MARKET"
              height="50"
              src="/main-logo.jpg"
              style={{
                aspectRatio: "200/50",
                objectFit: "cover",
              }}
              width="200"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              API MARKET은 고객님이 원하는 API를 직접 만들어 드립니다.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold tracking-wide uppercase">Contact</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Email: info@apimarket.me
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
