export const metadata = {
  title: "Sửa Khóa Két Sắt Chuyên Nghiệp | An Toàn & Bảo Mật",
  description:
    "Dịch vụ sửa khóa két sắt chuyên nghiệp, uy tín. Mở khóa, sửa chữa, thay thế linh kiện cho mọi loại két sắt, đảm bảo an toàn tuyệt đối.",
};

export default function SuaKhoaKetsatPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-center relative overflow-hidden shadow-lg">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-5 left-5 w-24 h-24 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-5 right-5 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-1/3 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Sửa Khóa Két Sắt: Giải Pháp An Toàn Cho Tài Sản Của Bạn
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
            Dịch vụ sửa khóa két sắt chuyên nghiệp, nhanh chóng, bảo mật. Mở
            khóa, sửa chữa, thay thế linh kiện cho mọi loại két sắt, bảo vệ tài
            sản của bạn.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="mb-10">
              <div className="min-h-[16rem] aspect-[3/2] w-full max-w-4xl mx-auto relative mb-6 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/images/ketsat1.png"
                  alt="Các loại khóa ô tô"
                  className="w-full h-full object-cover md:object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Khóa két sắt đóng vai trò vô cùng quan trọng trong việc bảo vệ
                tài sản của bạn. Sự cố với khóa có thể gây ra nhiều bất tiện và
                lo lắng. Chúng tôi cung cấp dịch vụ sửa khóa két sắt chuyên
                nghiệp, xử lý mọi vấn đề từ đơn giản đến phức tạp.
              </p>
              <p className="text-lg text-gray-700">
                Bài viết này sẽ cung cấp thông tin về các vấn đề thường gặp với
                khóa két sắt, cách nhận biết và khi nào cần đến sự hỗ trợ của
                chuyên gia. Chúng tôi cam kết mang đến giải pháp an toàn và hiệu
                quả cho mọi nhu cầu của bạn.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-10 bg-yellow-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-yellow-600">
                Mục Lục
              </h2>
              <ul className="space-y-2">
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#common-issues"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    1. Các vấn đề thường gặp với khóa két sắt
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#troubleshooting"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    2. Dấu hiệu nhận biết khóa két sắt gặp sự cố
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#expert-help"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    3. Khi nào cần gọi thợ sửa khóa két sắt chuyên nghiệp
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    4. Dịch vụ sửa khóa két sắt của chúng tôi
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1: Common Issues */}
            <div id="common-issues" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                1. Các vấn đề thường gặp với khóa két sắt
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">
                Chìa khóa không xoay được trong ổ khóa
              </h3>
              <p className="text-gray-700 mb-4">
                Đây là vấn đề phổ biến nhất với khóa két sắt cơ học. Nguyên nhân
                có thể do ổ khóa bị bẩn, han gỉ, chìa khóa bị mòn hoặc cơ chế
                khóa bị kẹt. Trong một số trường hợp, việc vặn chìa quá mạnh khi
                khóa bị kẹt có thể làm hỏng cơ chế bên trong.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Chìa khóa gãy trong ổ khóa
              </h3>
              <p className="text-gray-700 mb-4">
                Tình trạng này xảy ra khi chìa khóa đã cũ, vênh, hoặc khi người
                dùng cố dùng lực quá mạnh để xoay chìa trong ổ khóa bị kẹt. Đây
                là trường hợp nghiêm trọng thường đòi hỏi sự trợ giúp của thợ
                khóa chuyên nghiệp để lấy chìa gãy và sửa chữa ổ khóa.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Khóa số không nhận mã
              </h3>
              <p className="text-gray-700 mb-4">
                Với két sắt sử dụng khóa số, các vấn đề thường gặp bao gồm bàn
                phím số không nhận phím, mất điện (đối với khóa điện tử), hoặc
                quên mã số. Đôi khi do ẩm ướt hoặc va đập làm hỏng linh kiện bên
                trong hệ thống khóa số.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Khóa điện tử không nhận dạng vân tay/thẻ từ
              </h3>
              <p className="text-gray-700 mb-4">
                Đối với két sắt dùng khóa vân tay hoặc thẻ từ, các vấn đề có thể
                là cảm biến bị bẩn, hết pin, lỗi phần mềm hoặc hỏng chip trong
                thẻ từ. Một số trường hợp có thể do hệ thống nhận dạng bị lỗi
                sau thời gian dài sử dụng.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Mất hoặc làm mất tất cả chìa khóa
              </h3>
              <p className="text-gray-700 mb-4">
                Đây là tình huống khó xử lý nhất, đặc biệt với các két sắt cao
                cấp sử dụng chìa khóa có mã bảo mật. Việc làm lại chìa khóa
                không chỉ đơn giản là cắt một chìa mới mà còn cần đúng kỹ thuật
                để đảm bảo an toàn cho két sắt.
              </p>

              <div className="min-h-[16rem] aspect-[3/2] w-full max-w-4xl mx-auto relative mb-6 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/images/ketsat2.png"
                  alt="Các loại khóa ô tô"
                  className="w-full h-full object-cover md:object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Section 2: DIY Repair */}
            <div id="diy-repair" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                2. Hướng dẫn tự khắc phục các vấn đề đơn giản
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">
                Xử lý khi chìa khóa không xoay được
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Vật liệu cần chuẩn bị:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>Dầu bôi trơn khóa chuyên dụng (WD-40)</li>
                  <li>Khăn sạch</li>
                  <li>Bình xịt khí nén (nếu có)</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  <strong>Các bước thực hiện:</strong>
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Thử xoay nhẹ chìa khóa qua lại để kiểm tra mức độ kẹt</li>
                  <li>Xịt một lượng nhỏ dầu bôi trơn vào ổ khóa</li>
                  <li>Đợi 1-2 phút để dầu thấm vào cơ chế khóa</li>
                  <li>Nhẹ nhàng xoay chìa khóa qua lại vài lần</li>
                  <li>Tránh dùng lực quá mạnh để tránh gãy chìa khóa</li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Xử lý khi khóa số không nhận phím
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Vật liệu cần chuẩn bị:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>Pin mới (nếu là khóa điện tử)</li>
                  <li>Tăm bông và cồn isopropyl</li>
                  <li>Khăn mềm sạch</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  <strong>Các bước thực hiện:</strong>
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Thay pin mới nếu khóa sử dụng pin (đảm bảo đúng cực)</li>
                  <li>Lau sạch bàn phím số bằng tăm bông thấm cồn</li>
                  <li>Đợi 5 phút cho khô hoàn toàn trước khi sử dụng</li>
                  <li>Thử nhập lại mã số chính xác</li>
                  <li>
                    Kiểm tra xem có tiếng &quot;bíp&quot; khi nhấn phím không
                  </li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Khắc phục khóa vân tay không nhận diện
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Lưu ý:</strong> Quy trình này áp dụng cho hầu hết két
                  sắt dùng vân tay thông dụng:
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Kiểm tra và thay pin nếu cần (đối với khóa điện tử)</li>
                  <li>Lau sạch cảm biến vân tay bằng vải mềm khô</li>
                  <li>
                    Đăng nhập bằng mã số phụ (nếu có) và xóa/đăng ký lại vân tay
                  </li>
                  <li>Đảm bảo ngón tay sạch sẽ và khô ráo khi quét vân tay</li>
                  <li>
                    Thử đăng ký vân tay ở góc độ khác nếu thường xuyên không
                    nhận diện
                  </li>
                </ol>
                <p className="text-gray-700 mt-2">
                  <strong>Quan trọng:</strong> Nếu không chắc chắn, hãy tham
                  khảo sách hướng dẫn sử dụng két sắt hoặc liên hệ chuyên gia.
                </p>
              </div>

              <p className="text-gray-700 mt-6 italic">
                <strong>Lưu ý:</strong> Những hướng dẫn trên chỉ phù hợp với các
                vấn đề cơ bản. Với các tình huống phức tạp hơn như chìa khóa gãy
                trong ổ khóa, làm lại chìa khi mất hoàn toàn, hoặc sửa hệ thống
                khóa điện tử bị hỏng, bạn nên tìm đến thợ khóa két sắt chuyên
                nghiệp.
              </p>
            </div>

            {/* Section 3: Maintenance */}
            <div id="maintenance" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                3. Cách bảo dưỡng khóa két sắt định kỳ
              </h2>

              <p className="text-gray-700 mb-4">
                Bảo dưỡng định kỳ giúp kéo dài tuổi thọ và đảm bảo hoạt động
                trơn tru của hệ thống khóa két sắt. Dưới đây là lịch trình bảo
                dưỡng được khuyến nghị:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Tần suất
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Công việc bảo dưỡng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Hàng tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Kiểm tra pin (đối với khóa điện tử), lau sạch bề mặt
                        khóa
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        3 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Bôi trơn ổ khóa cơ với dầu chuyên dụng
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        6 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Kiểm tra toàn diện tình trạng khóa và cơ chế đóng mở
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        12 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Thay pin mới (khóa điện tử), làm sạch sâu cơ chế khóa
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Mẹo bảo quản khóa két sắt:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Tránh để két sắt ở nơi ẩm ướt có thể gây oxy hóa khóa</li>
                <li>Không để vật nặng đè lên hoặc va đập mạnh vào vùng khóa</li>
                <li>Luôn có ít nhất 2 chìa khóa dự phòng và cất giữ an toàn</li>
                <li>Đối với khóa số, thay đổi mã số định kỳ để tăng bảo mật</li>
                <li>
                  Với khóa vân tay, làm sạch cảm biến thường xuyên bằng vải mềm
                </li>
                <li>Không tự ý tháo khóa khi không có chuyên môn</li>
              </ul>

              <div className="min-h-[16rem] aspect-[3/2] w-full max-w-4xl mx-auto relative mb-6 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/images/ketsat3.png"
                  alt="Các loại khóa ô tô"
                  className="w-full h-full object-cover md:object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Section 4: Professional Help */}
            <div id="professional-help" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                4. Khi nào nên gọi thợ sửa khóa két sắt chuyên nghiệp
              </h2>

              <p className="text-gray-700 mb-4">
                Mặc dù có thể tự xử lý một số vấn đề đơn giản, nhưng nhiều
                trường hợp cần đến sự trợ giúp của thợ khóa két sắt chuyên
                nghiệp:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-red-700">
                    Tình huống khẩn cấp
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Chìa khóa bị gãy trong ổ khóa</li>
                    <li>Mất tất cả chìa khóa của két sắt</li>
                    <li>Quên mã số và không có chìa dự phòng</li>
                    <li>Khóa bị kẹt cứng không thể mở bằng bất kỳ cách nào</li>
                    <li>
                      Hệ thống khóa bị hỏng sau khi có dấu hiệu bị cạy phá
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-700">
                    Vấn đề phức tạp
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Cần làm lại hoàn toàn chìa khóa có mã bảo mật</li>
                    <li>Lập trình lại hệ thống khóa số/điện tử</li>
                    <li>Thay thế toàn bộ ổ khóa</li>
                    <li>Sửa chữa hệ thống điện tử liên quan đến khóa</li>
                    <li>Nâng cấp hệ thống khóa lên công nghệ mới</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Tiêu chí chọn thợ sửa khóa két sắt uy tín:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>
                  Có chuyên môn và kinh nghiệm với đúng loại két sắt của bạn
                </li>
                <li>
                  Sở hữu thiết bị chuyên dụng để lập trình khóa số/điện tử
                </li>
                <li>Cung cấp bảo hành cho dịch vụ</li>
                <li>Có đánh giá tốt từ khách hàng trước đó</li>
                <li>Minh bạch về chi phí trước khi thực hiện công việc</li>
                <li>Tôn trọng quyền riêng tư và bảo mật thông tin</li>
              </ul>

              <div className="p-4 bg-yellow-50 rounded-lg mb-6">
                <p className="text-gray-700 mb-2">
                  <strong className="text-yellow-700">
                    Chi phí tham khảo:
                  </strong>{" "}
                  Giá dịch vụ sửa khóa két sắt dao động tùy theo loại khóa và
                  vấn đề cụ thể:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Mở khóa khi bị kẹt: 300.000đ - 800.000đ</li>
                  <li>Làm chìa khóa cơ thông thường: 200.000đ - 500.000đ</li>
                  <li>Làm chìa khóa có mã bảo mật: 500.000đ - 1.200.000đ</li>
                  <li>Sửa chữa khóa số/điện tử: 800.000đ - 2.000.000đ</li>
                  <li>Thay thế toàn bộ ổ khóa: 1.000.000đ - 3.000.000đ</li>
                </ul>
                <p className="text-gray-700 mt-2 italic">
                  Giá có thể cao hơn đối với két sắt cao cấp hoặc những trường
                  hợp đặc biệt phức tạp.
                </p>
              </div>
            </div>

            {/* Section 5: Lock Types */}
            <div id="lock-types" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                5. Các loại khóa két sắt phổ biến và đặc điểm
              </h2>

              <p className="text-gray-700 mb-6">
                Hiểu rõ về loại khóa trên két sắt giúp bạn có phương án bảo
                dưỡng và xử lý sự cố phù hợp:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Loại khóa
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Đặc điểm
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Ưu và nhược điểm
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa cơ truyền thống
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Sử dụng chìa cơ đơn giản</li>
                          <li>Không phụ thuộc vào điện</li>
                          <li>Phổ biến trên két sắt thông dụng</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Dễ làm chìa
                        thay thế
                        <br />
                        <span className="text-green-600">+</span> Chi phí thấp
                        <br />
                        <span className="text-red-600">-</span> Bảo mật thấp
                        <br />
                        <span className="text-red-600">-</span> Dễ bị kẹt theo
                        thời gian
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa số cơ học
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Mở bằng mã số xoay núm</li>
                          <li>Không cần chìa khóa</li>
                          <li>Phổ biến trên két sắt tầm trung</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Không cần chìa
                        <br />
                        <span className="text-green-600">+</span> Bảo mật khá
                        tốt
                        <br />
                        <span className="text-red-600">-</span> Dễ quên mã số
                        <br />
                        <span className="text-red-600">-</span> Cơ chế phức tạp
                        dễ hỏng
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa số điện tử
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Mở bằng mã số bấm phím</li>
                          <li>Có thể kết hợp chìa cơ dự phòng</li>
                          <li>Phổ biến trên két sắt hiện đại</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Tiện lợi, dễ
                        sử dụng
                        <br />
                        <span className="text-green-600">+</span> Bảo mật cao
                        <br />
                        <span className="text-red-600">-</span> Phụ thuộc vào
                        pin
                        <br />
                        <span className="text-red-600">-</span> Chi phí sửa chữa
                        cao
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa vân tay
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Mở bằng vân tay đã đăng ký</li>
                          <li>Thường có thêm mã số dự phòng</li>
                          <li>Phổ biến trên két sắt cao cấp</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Cực kỳ tiện
                        lợi
                        <br />
                        <span className="text-green-600">+</span> Bảo mật cao
                        nhất
                        <br />
                        <span className="text-red-600">-</span> Chi phí thay thế
                        rất cao
                        <br />
                        <span className="text-red-600">-</span> Cảm biến có thể
                        lỗi theo thời gian
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa thẻ từ
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Mở bằng thẻ từ chuyên dụng</li>
                          <li>
                            Thường dùng trong két sắt khách sạn, văn phòng
                          </li>
                          <li>Có thể lập trình nhiều thẻ khác nhau</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Quản lý truy
                        cập dễ dàng
                        <br />
                        <span className="text-green-600">+</span> Thuận tiện cho
                        nhiều người sử dụng
                        <br />
                        <span className="text-red-600">-</span> Dễ mất thẻ
                        <br />
                        <span className="text-red-600">-</span> Hệ thống phức
                        tạp, chi phí bảo trì cao
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Lời khuyên khi lựa chọn khóa két sắt:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>
                  Két sắt gia đình: Nên chọn loại có cả khóa số điện tử và chìa
                  cơ dự phòng
                </li>
                <li>
                  Luôn làm ít nhất 2-3 chìa khóa dự phòng ngay khi mua két sắt
                  mới
                </li>
                <li>
                  Đối với két sắt văn phòng: Cân nhắc loại có thể lập trình
                  nhiều mã số hoặc thẻ từ
                </li>
                <li>
                  Két sắt cao cấp: Chọn loại có nhiều lớp bảo mật (vân tay + mã
                  số + chìa)
                </li>
                <li>
                  Lưu lại mã số khóa và thông tin sản phẩm để dễ dàng làm chìa
                  khi cần
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                Kết Luận
              </h2>

              <p className="text-gray-700 mb-4">
                Hệ thống khóa két sắt ngày càng phát triển với công nghệ hiện
                đại, mang lại sự tiện lợi và an toàn cho người sử dụng. Tuy
                nhiên, càng hiện đại thì việc sửa chữa và thay thế càng trở nên
                phức tạp và tốn kém.
              </p>
              <p className="text-gray-700 mb-4">
                Việc hiểu rõ cấu tạo và nguyên lý hoạt động của khóa két sắt
                giúp bạn phát hiện sớm các dấu hiệu hư hỏng và có biện pháp xử
                lý kịp thời. Ngoài ra, bảo dưỡng định kỳ là cách hiệu quả để kéo
                dài tuổi thọ cho khóa két sắt, đồng thời đảm bảo an toàn cho tài
                sản quý giá bên trong.
              </p>
              <p className="text-gray-700 mb-4">
                Đối với các trường hợp phức tạp như quên mã số, mất chìa khóa
                hoặc khóa bị hỏng nặng, việc tìm đến dịch vụ sửa khóa két sắt
                chuyên nghiệp là lựa chọn khôn ngoan nhất. Đừng tự ý can thiệp
                vào két sắt nếu không có kiến thức chuyên môn, vì điều này có
                thể làm hỏng hoàn toàn hệ thống khóa hoặc thậm chí kích hoạt cơ
                chế tự khóa vĩnh viễn.
              </p>

              <div className="p-4 bg-yellow-50 rounded-lg mt-6">
                <p className="text-gray-700 italic">
                  <strong>Lưu ý:</strong> Thông tin trong bài viết này chỉ mang
                  tính chất tham khảo. Đối với các vấn đề liên quan đến khóa két
                  sắt, đặc biệt là két sắt điện tử hoặc két sắt cao cấp, hãy
                  luôn tham khảo ý kiến của chuyên gia hoặc liên hệ với nhà sản
                  xuất để được hỗ trợ kịp thời.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                Câu Hỏi Thường Gặp
              </h2>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Tôi quên mã số két sắt, làm cách nào để mở?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Nếu quên mã số, trước tiên hãy tìm kiếm sổ tay hướng dẫn
                      sử dụng hoặc giấy tờ mua hàng, vì một số nhà sản xuất có
                      ghi mã mặc định. Nếu không tìm thấy, liên hệ với nhà sản
                      xuất và cung cấp thông tin xác minh quyền sở hữu. Trường
                      hợp khẩn cấp, hãy gọi dịch vụ sửa khóa két sắt chuyên
                      nghiệp - họ có các phương pháp an toàn để mở két mà không
                      làm hỏng kết cấu.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Khóa vân tay két sắt có đáng tin cậy không?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Khóa vân tay két sắt hiện đại rất đáng tin cậy với tỷ lệ
                      nhận diện chính xác cao. Tuy nhiên, chúng vẫn có thể gặp
                      vấn đề khi tay quá ẩm, quá khô hoặc có vết thương. Hầu hết
                      các két sắt vân tay đều có phương thức dự phòng như mã số
                      hoặc chìa khóa cơ. Để đảm bảo an toàn, nên chọn két từ
                      thương hiệu uy tín và luôn cập nhật phần mềm theo khuyến
                      nghị của nhà sản xuất.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Két sắt báo tín hiệu pin yếu, tôi có nên thay ngay không?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Khi két sắt báo pin yếu, bạn nên thay pin càng sớm càng
                      tốt, không nên chờ đợi. Két sắt điện tử thường có pin dự
                      phòng bên trong, nhưng chỉ đủ dùng trong thời gian ngắn.
                      Trước khi thay pin, hãy chuẩn bị chìa khóa dự phòng hoặc
                      nhớ mã số phụ, đề phòng trường hợp két tự khởi động lại về
                      cài đặt gốc sau khi thay pin. Nên sử dụng pin chất lượng
                      cao từ các thương hiệu nổi tiếng để đảm bảo độ bền.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Làm gì khi cơ chế khóa két sắt bị kẹt?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Khi cơ chế khóa bị kẹt, trước tiên đừng dùng lực mạnh. Nếu
                      là khóa cơ, thử bôi trơn nhẹ nhàng bằng bột graphite đặc
                      biệt cho khóa (không dùng dầu). Đối với khóa điện tử, kiểm
                      tra pin và thử reset hệ thống theo hướng dẫn. Nếu két sắt
                      vẫn không mở được, hãy liên hệ ngay với dịch vụ chuyên
                      nghiệp - việc cố gắng mở bằng lực có thể kích hoạt cơ chế
                      chống đột nhập và làm két bị khóa hoàn toàn.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Chi phí sửa khóa két sắt thường là bao nhiêu?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Chi phí sửa khóa két sắt phụ thuộc vào loại két, tính chất
                      hư hỏng và khu vực địa lý. Mở két khi quên mã số có thể từ
                      500.000đ đến 2.000.000đ. Sửa chữa khóa cơ thường từ
                      300.000đ đến 1.000.000đ. Đối với khóa điện tử, chi phí cao
                      hơn, từ 1.000.000đ đến 3.000.000đ tùy mức độ phức tạp.
                      Thay thế toàn bộ hệ thống khóa sẽ đắt hơn, có thể từ
                      2.000.000đ đến 5.000.000đ cho các két sắt cao cấp. Một số
                      công ty có phí tư vấn và kiểm tra miễn phí, nhưng tính phí
                      di chuyển nếu ở xa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                Dịch Vụ Liên Quan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Sửa Remote Cửa Cuốn
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ sửa khóa, thay pin remote cửa cuốn
                  </p>
                  <a
                    href="/remote-cua-cuon"
                    className="text-yellow-600 hover:text-yellow-800 font-medium"
                  >
                    Tìm hiểu thêm
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Sửa Khóa Tủ
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ sửa khóa tủ, làm chìa khóa tủ
                  </p>
                  <a
                    href="/sua-khoa-tu"
                    className="text-yellow-600 hover:text-yellow-800 font-medium"
                  >
                    Tìm hiểu thêm
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Sửa Khóa Cửa
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ sửa chữa khóa cửa các loại
                  </p>
                  <a
                    href="/sua-khoa-cua"
                    className="text-yellow-600 hover:text-yellow-800 font-medium"
                  >
                    Tìm hiểu thêm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
