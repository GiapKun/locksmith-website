export const metadata = {
  title: "Sửa Khóa Cửa Nhanh Chóng",
  description:
    "Khóa cửa gặp vấn đề? Gọi ngay dịch vụ sửa khóa cửa chuyên nghiệp, có mặt nhanh chóng để giải quyết mọi sự cố!",
};

export default function SuaKhoaCuaPage() {
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
            Sửa Khóa Cửa Nhanh Chóng
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
            Tất tần tật về sửa chữa khóa cửa, từ nguyên nhân đến cách khắc phục
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="mb-10">
              <div className="h-64 md:h-80 relative mb-6 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">
                  [Hình ảnh: Khóa cửa các loại]
                </span>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Khóa cửa là một trong những thiết bị bảo vệ quan trọng nhất
                trong mọi ngôi nhà. Tuy nhiên, theo thời gian sử dụng, khóa cửa
                có thể gặp nhiều vấn đề như kẹt, không mở được, hoặc chìa khóa
                bị gãy trong ổ khóa. Bài viết này sẽ hướng dẫn bạn cách nhận
                biết, khắc phục các sự cố thường gặp với khóa cửa và cách bảo
                dưỡng để kéo dài tuổi thọ của khóa.
              </p>
              <p className="text-lg text-gray-700">
                Dù bạn đang sử dụng khóa cơ truyền thống, khóa thẻ từ hay khóa
                vân tay hiện đại, những thông tin dưới đây đều sẽ giúp bạn hiểu
                rõ hơn về cách vận hành và bảo quản khóa cửa một cách hiệu quả.
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
                    1. Các vấn đề thường gặp với khóa cửa
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#diy-repair"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    2. Hướng dẫn tự sửa khóa cửa tại nhà
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#maintenance"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    3. Cách bảo dưỡng khóa cửa định kỳ
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#professional-help"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    4. Khi nào nên gọi thợ sửa khóa chuyên nghiệp
                  </a>
                </li>
                <li>
                  <a
                    href="#lock-selection"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    5. Lựa chọn khóa cửa phù hợp khi thay thế
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1: Common Issues */}
            <div id="common-issues" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                1. Các vấn đề thường gặp với khóa cửa
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">
                Khóa cửa bị kẹt hoặc khó xoay
              </h3>
              <p className="text-gray-700 mb-4">
                Đây là vấn đề phổ biến nhất với khóa cửa. Nguyên nhân có thể do
                bụi bẩn tích tụ trong ổ khóa, thiếu dầu bôi trơn, ổ khóa bị mòn
                theo thời gian, hoặc cửa bị lệch khiến khóa không thẳng hàng với
                ổ.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Chìa khóa bị gãy trong ổ khóa
              </h3>
              <p className="text-gray-700 mb-4">
                Tình huống này thường xảy ra khi chìa khóa đã cũ, mòn, hoặc khi
                dùng lực quá mạnh để mở khóa cửa bị kẹt. Đây là trường hợp khá
                phức tạp và thường cần sự trợ giúp của thợ khóa chuyên nghiệp.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Khóa cửa không khớp với khung cửa
              </h3>
              <p className="text-gray-700 mb-4">
                Vấn đề này thường xảy ra do sự dịch chuyển của cửa theo thời
                gian, đặc biệt là với cửa gỗ có thể co ngót khi thay đổi độ ẩm
                và nhiệt độ. Cửa có thể bị võng, lệch khiến khóa và ổ không
                thẳng hàng.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Khóa cửa điện tử gặp sự cố
              </h3>
              <p className="text-gray-700 mb-4">
                Đối với khóa điện tử, các vấn đề thường gặp bao gồm hết pin, lỗi
                phần mềm, cảm biến vân tay không nhận diện được, hoặc mã PIN bị
                quên. Những lỗi này đòi hỏi cách xử lý khác với khóa cơ truyền
                thống.
              </p>

              <div className="h-48 relative mt-6 mb-6 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">
                  [Hình ảnh: Minh họa các vấn đề khóa cửa]
                </span>
              </div>
            </div>

            {/* Section 2: DIY Repair */}
            <div id="diy-repair" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                2. Hướng dẫn tự sửa khóa cửa tại nhà
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">
                Xử lý khóa cửa bị kẹt
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Vật liệu cần chuẩn bị:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>Bột graphite hoặc WD-40</li>
                  <li>Khăn lau sạch</li>
                  <li>Tua vít phù hợp</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  <strong>Các bước thực hiện:</strong>
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Làm sạch ổ khóa bằng cách thổi hoặc hút bụi bẩn</li>
                  <li>Bôi một lượng nhỏ bột graphite hoặc WD-40 vào ổ khóa</li>
                  <li>
                    Đưa chìa khóa vào và xoay nhẹ nhàng vài lần để dầu bôi trơn
                    đều
                  </li>
                  <li>Lau sạch phần dầu thừa bên ngoài</li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Điều chỉnh khóa cửa không khớp
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Vật liệu cần chuẩn bị:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>Tua vít</li>
                  <li>Cờ lê hoặc mỏ lết</li>
                  <li>Dũa kim loại (nếu cần)</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  <strong>Các bước thực hiện:</strong>
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Kiểm tra vị trí không khớp giữa khóa và khung cửa</li>
                  <li>Nới lỏng các vít cố định bản lề cửa</li>
                  <li>Điều chỉnh vị trí cửa để khóa và khung thẳng hàng</li>
                  <li>Siết chặt lại các vít bản lề</li>
                  <li>
                    Nếu cần, điều chỉnh tấm kim loại trên khung cửa để khớp với
                    chốt khóa
                  </li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Khắc phục khóa điện tử hết pin
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Vật liệu cần chuẩn bị:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>Pin mới phù hợp với loại khóa</li>
                  <li>Tua vít nhỏ</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  <strong>Các bước thực hiện:</strong>
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Tìm ngăn chứa pin của khóa (thường ở mặt trong cửa)</li>
                  <li>Mở nắp ngăn pin bằng tua vít</li>
                  <li>Thay pin mới, chú ý đúng cực dương và âm</li>
                  <li>Đóng nắp ngăn pin và kiểm tra hoạt động của khóa</li>
                </ol>
              </div>

              <p className="text-gray-700 mt-6 italic">
                <strong>Lưu ý:</strong> Những hướng dẫn trên chỉ phù hợp với các
                vấn đề đơn giản. Nếu tình trạng khóa cửa nghiêm trọng hoặc bạn
                không có kinh nghiệm, hãy liên hệ thợ sửa khóa chuyên nghiệp để
                tránh làm hỏng khóa và cửa.
              </p>
            </div>

            {/* Section 3: Maintenance */}
            <div id="maintenance" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                3. Cách bảo dưỡng khóa cửa định kỳ
              </h2>

              <p className="text-gray-700 mb-4">
                Bảo dưỡng khóa cửa định kỳ là cách tốt nhất để phòng ngừa các sự
                cố và kéo dài tuổi thọ của khóa. Dưới đây là lịch trình bảo
                dưỡng khóa cửa được khuyến nghị:
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
                        Kiểm tra và làm sạch bề mặt khóa, lau dầu mỡ thừa
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        3 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Kiểm tra độ chặt của các vít cố định, siết lại nếu cần
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        6 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Bôi trơn ổ khóa bằng bột graphite hoặc dầu bôi trơn
                        chuyên dụng
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        12 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Kiểm tra toàn diện, tháo lắp làm sạch (nếu có kỹ năng)
                        hoặc gọi chuyên gia
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Lưu ý khi bảo dưỡng:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>
                  Không sử dụng dầu nhớt quá đặc cho ổ khóa, vì có thể gây tích
                  tụ bụi bẩn
                </li>
                <li>
                  Đối với khóa điện tử, thay pin định kỳ theo khuyến cáo của nhà
                  sản xuất
                </li>
                <li>Không dùng vật cứng để cạo bụi bẩn trong ổ khóa</li>
                <li>
                  Tránh sử dụng các chất tẩy rửa mạnh có thể gây ăn mòn kim loại
                </li>
                <li>
                  Đối với cửa ngoài trời, cần bảo dưỡng thường xuyên hơn do ảnh
                  hưởng của thời tiết
                </li>
              </ul>

              <div className="h-48 relative mt-6 mb-6 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">
                  [Hình ảnh: Hướng dẫn bảo dưỡng khóa cửa]
                </span>
              </div>
            </div>

            {/* Section 4: Professional Help */}
            <div id="professional-help" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                4. Khi nào nên gọi thợ sửa khóa chuyên nghiệp
              </h2>

              <p className="text-gray-700 mb-4">
                Mặc dù một số vấn đề khóa cửa có thể tự khắc phục tại nhà, nhưng
                có những trường hợp cần sự trợ giúp của thợ khóa chuyên nghiệp:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-red-700 text-gray-900">
                    Tình huống khẩn cấp
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Chìa khóa bị gãy trong ổ khóa</li>
                    <li>Bị khóa ngoài và không có chìa dự phòng</li>
                    <li>Khóa bị hỏng hoàn toàn không thể mở được</li>
                    <li>Khóa điện tử bị lỗi nghiêm trọng</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-700">
                    Vấn đề phức tạp
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Cần thay thế toàn bộ khóa cửa</li>
                    <li>Nâng cấp từ khóa cơ lên khóa điện tử</li>
                    <li>Khóa bị hư hỏng sau khi có dấu hiệu cố mở trái phép</li>
                    <li>Cài đặt lại hệ thống khóa thông minh</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Cách chọn thợ khóa uy tín:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Tìm kiếm thợ khóa có giấy phép hành nghề</li>
                <li>Kiểm tra đánh giá và phản hồi từ khách hàng trước đó</li>
                <li>Yêu cầu báo giá trước khi bắt đầu công việc</li>
                <li>Đảm bảo thợ khóa cung cấp bảo hành cho dịch vụ</li>
                <li>Chọn đơn vị có dịch vụ 24/7 cho các trường hợp khẩn cấp</li>
              </ul>

              <div className="p-4 bg-yellow-50 rounded-lg mb-6">
                <p className="text-gray-700 mb-2">
                  <strong className="text-yellow-700">Lời khuyên:</strong> Nên
                  lưu sẵn số điện thoại của thợ khóa uy tín trong điện thoại
                  hoặc sổ tay để dễ dàng liên hệ khi cần. Một số dịch vụ sửa
                  khóa có thể đến tận nơi trong vòng 15-30 phút cho các trường
                  hợp khẩn cấp.
                </p>
              </div>
            </div>

            {/* Section 5: Lock Selection */}
            <div id="lock-selection" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                5. Lựa chọn khóa cửa phù hợp khi thay thế
              </h2>

              <p className="text-gray-700 mb-6">
                Khi cần thay thế khóa cửa, việc lựa chọn loại khóa phù hợp là
                rất quan trọng. Dưới đây là so sánh giữa các loại khóa cửa phổ
                biến hiện nay:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Loại khóa
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Ưu điểm
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Nhược điểm
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Phù hợp với
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
                          <li>Giá thành hợp lý</li>
                          <li>Độ bền cao</li>
                          <li>Dễ sử dụng</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Có thể bị phá khóa</li>
                          <li>Phải mang theo chìa</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Cửa trong nhà, cửa phụ
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa mã số
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Không cần chìa khóa</li>
                          <li>Dễ sử dụng</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Có thể bị nhìn thấy mã</li>
                          <li>Cần pin hoặc điện</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Cửa phòng, văn phòng
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa vân tay
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Bảo mật cao</li>
                          <li>Tiện lợi</li>
                          <li>Không cần nhớ mã</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Giá thành cao</li>
                          <li>Phụ thuộc pin/điện</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Cửa chính, căn hộ cao cấp
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa thẻ từ
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Tiện lợi, nhanh chóng</li>
                          <li>Dễ quản lý nhiều người dùng</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Thẻ có thể bị mất</li>
                          <li>Cần pin hoặc điện</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Văn phòng, khách sạn
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa thông minh
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Kết nối với điện thoại</li>
                          <li>Nhiều tính năng cao cấp</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Giá cao nhất</li>
                          <li>Phức tạp khi cài đặt</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Nhà thông minh, biệt thự
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Yếu tố cần cân nhắc khi chọn khóa:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>
                  <strong>Mức độ an toàn:</strong> Cửa chính nên sử dụng khóa có
                  cấp độ bảo mật cao nhất
                </li>
                <li>
                  <strong>Ngân sách:</strong> Cân nhắc giữa chi phí và tính năng
                  cần thiết
                </li>
                <li>
                  <strong>Loại cửa:</strong> Đảm bảo khóa phù hợp với vật liệu
                  và kích thước của cửa
                </li>
                <li>
                  <strong>Tính thẩm mỹ:</strong> Chọn khóa có thiết kế phù hợp
                  với phong cách nội thất
                </li>
                <li>
                  <strong>Khả năng mở rộng:</strong> Nếu có kế hoạch xây dựng
                  nhà thông minh, nên chọn khóa có khả năng kết nối
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                Kết Luận
              </h2>

              <p className="text-gray-700 mb-4">
                Khóa cửa là một phần quan trọng trong hệ thống an ninh của mọi
                ngôi nhà. Việc hiểu rõ cách vận hành, bảo dưỡng và sửa chữa khóa
                cửa sẽ giúp bạn tiết kiệm thời gian và chi phí, đồng thời đảm
                bảo an toàn cho gia đình.
              </p>
              <p className="text-gray-700 mb-4">
                Với những hướng dẫn trên, bạn có thể tự xử lý nhiều vấn đề
                thường gặp với khóa cửa. Tuy nhiên, đừng ngần ngại liên hệ với
                thợ khóa chuyên nghiệp khi gặp các tình huống phức tạp hoặc khẩn
                cấp. Việc đầu tư vào khóa cửa chất lượng cao và bảo dưỡng định
                kỳ là cách tốt nhất để bảo vệ tài sản và đảm bảo sự yên tâm cho
                gia đình bạn.
              </p>
              <p className="text-gray-700 mb-4">
                Hãy nhớ rằng, một hệ thống khóa cửa hoạt động tốt không chỉ mang
                lại sự an toàn mà còn góp phần tạo nên sự tiện nghi và nâng cao
                giá trị cho ngôi nhà của bạn.
              </p>

              <div className="p-4 bg-yellow-50 rounded-lg mt-6">
                <p className="text-gray-700 italic">
                  <strong>Lưu ý:</strong> Thông tin trong bài viết này chỉ mang
                  tính chất tham khảo. Đối với các vấn đề phức tạp về khóa cửa,
                  hãy luôn tham khảo ý kiến của chuyên gia hoặc dịch vụ sửa khóa
                  chuyên nghiệp.
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
                      Tôi bị mất chìa khóa, làm sao để mở cửa?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Trường hợp mất chìa khóa, bạn nên liên hệ với thợ khóa
                      chuyên nghiệp để mở cửa. Đừng cố gắng tự phá khóa vì có
                      thể làm hỏng cửa hoặc khóa. Sau khi mở được cửa, nên thay
                      ổ khóa mới để đảm bảo an toàn.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Khóa cửa điện tử có an toàn hơn khóa cơ không?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Khóa điện tử thường có nhiều tính năng bảo mật cao cấp như
                      mã PIN, vân tay hoặc thẻ từ, giúp tránh được việc phá khóa
                      truyền thống. Tuy nhiên, chúng phụ thuộc vào pin/điện và
                      có thể gặp lỗi kỹ thuật. Mỗi loại khóa đều có ưu nhược
                      điểm riêng, việc lựa chọn tùy thuộc vào nhu cầu và điều
                      kiện sử dụng.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Có nên thay khóa cửa khi chuyển đến nhà mới không?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Có, việc thay khóa khi chuyển đến nhà mới là biện pháp an
                      toàn được khuyến nghị. Bạn không biết có bao nhiêu bản sao
                      chìa khóa đang lưu hành từ chủ nhà cũ. Thay khóa mới giúp
                      đảm bảo chỉ những người được bạn cho phép mới có thể vào
                      nhà.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Nên bôi trơn khóa cửa bằng gì?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Bột graphite khô là lựa chọn tốt nhất để bôi trơn khóa cửa
                      vì không gây dính bụi bẩn. Tránh sử dụng dầu nhớt quá đặc
                      hoặc WD-40 trong thời gian dài vì chúng có thể thu hút bụi
                      bẩn và gây kẹt khóa. Đối với khóa ngoài trời, nên sử dụng
                      loại dầu bôi trơn chuyên dụng cho khóa cửa.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Chi phí sửa khóa cửa thường là bao nhiêu?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Chi phí sửa khóa cửa phụ thuộc vào loại khóa, tình trạng
                      hư hỏng và khu vực địa lý. Dịch vụ đơn giản như mở khóa có
                      thể từ 100.000đ đến 300.000đ. Sửa chữa khóa cơ có thể từ
                      200.000đ đến 500.000đ. Đối với khóa điện tử, chi phí có
                      thể cao hơn, từ 500.000đ trở lên. Thay thế hoàn toàn khóa
                      mới sẽ bao gồm cả giá khóa và công lắp đặt.
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
                    Sửa Khóa Xe Ô Tô
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ sửa, làm chìa khóa xe ô tô các loại
                  </p>
                  <a
                    href="/khoa-o-to"
                    className="text-yellow-600 hover:text-yellow-800 font-medium"
                  >
                    Tìm hiểu thêm
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Sửa Khóa Xe Máy
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ sửa, làm chìa khóa xe máy các loại
                  </p>
                  <a
                    href="//khoa-xe-may"
                    className="text-yellow-600 hover:text-yellow-800 font-medium"
                  >
                    Tìm hiểu thêm
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Sửa Khóa Két Sắt
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ mở, sửa và thay thế khóa két sắt các loại
                  </p>
                  <a
                    href="/sua-khoa-ket"
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
