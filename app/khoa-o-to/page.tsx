import Image from "next/image";

export const metadata = {
  title: "Sửa Khóa Két Sắt Chuyên Nghiệp | An Toàn & Bảo Mật",
  description:
    "Dịch vụ sửa khóa két sắt chuyên nghiệp, uy tín. Mở khóa, sửa chữa, thay thế linh kiện cho mọi loại két sắt, đảm bảo an toàn tuyệt đối.",
};

export default function SuaKhoaOToPage() {
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
            Sửa Khóa Ô Tô Nhanh Chóng - Tiết Kiệm Thời Gian Cho Bạn
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
            Gặp rắc rối với khóa ô tô? Đừng để nó làm gián đoạn lịch trình của
            bạn. Dịch vụ sửa khóa ô tô chuyên nghiệp, có mặt nhanh chóng để giải
            quyết vấn đề.
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
                <Image
                  src="/images/oto1.png"
                  alt="Các loại khóa ô tô"
                  fill
                  className="object-cover md:object-contain"
                  priority
                />
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Khóa ô tô là một trong những hệ thống bảo mật quan trọng nhất
                của chiếc xe. Từ các loại chìa cơ truyền thống đến khóa thông
                minh hiện đại, hệ thống khóa đóng vai trò thiết yếu trong việc
                bảo vệ tài sản của bạn. Tuy nhiên, các vấn đề với khóa ô tô luôn
                xảy ra bất ngờ và gây nhiều phiền toái cho chủ xe.
              </p>
              <p className="text-lg text-gray-700">
                Bài viết này sẽ giúp bạn hiểu rõ về các loại khóa ô tô phổ biến,
                những sự cố thường gặp và cách khắc phục. Dù bạn đang sử dụng xe
                đời cũ với chìa khóa cơ truyền thống hay xe hiện đại với khóa
                thông minh, smartkey, những thông tin dưới đây sẽ giúp bạn xử lý
                các tình huống bất ngờ và bảo dưỡng khóa xe đúng cách.
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
                    1. Các vấn đề thường gặp với khóa ô tô
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#diy-repair"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    2. Hướng dẫn tự khắc phục các vấn đề đơn giản
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#maintenance"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    3. Cách bảo dưỡng khóa ô tô định kỳ
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#professional-help"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    4. Khi nào nên gọi thợ khóa ô tô chuyên nghiệp
                  </a>
                </li>
                <li>
                  <a
                    href="#lock-types"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    5. Các loại khóa ô tô hiện đại và đặc điểm
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1: Common Issues */}
            <div id="common-issues" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                1. Các vấn đề thường gặp với khóa ô tô
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">
                Chìa khóa không xoay được trong ổ khóa
              </h3>
              <p className="text-gray-700 mb-4">
                Đây là vấn đề phổ biến nhất với ổ khóa cơ. Nguyên nhân có thể do
                ổ khóa bị bẩn, han gỉ, chìa khóa bị mòn hoặc vô-lăng đang ở chế
                độ khóa. Trong một số trường hợp, việc khóa vô-lăng quá chặt
                khiến ổ khóa bị kẹt và không xoay được.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Chìa khóa gãy trong ổ khóa
              </h3>
              <p className="text-gray-700 mb-4">
                Tình trạng này xảy ra khi chìa khóa đã cũ, vênh, hoặc khi người
                dùng cố dùng lực quá mạnh để xoay chìa trong ổ khóa bị kẹt. Đây
                là trường hợp nghiêm trọng thường đòi hỏi sự trợ giúp của thợ
                khóa chuyên nghiệp.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Remote không hoạt động
              </h3>
              <p className="text-gray-700 mb-4">
                Với xe sử dụng remote, các vấn đề thường gặp bao gồm hết pin,
                hỏng mạch điện trong remote, nhiễu tần số, hoặc mất kết nối với
                bộ điều khiển trung tâm của xe. Đôi khi do ẩm ướt hoặc va đập
                làm hỏng linh kiện bên trong.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Smartkey không nhận dạng
              </h3>
              <p className="text-gray-700 mb-4">
                Đối với xe dùng khóa thông minh, các vấn đề có thể là hết pin
                trong smartkey, lỗi cảm biến, nhiễu sóng, hoặc hỏng chip trong
                chìa khóa. Một số trường hợp có thể do hệ thống điện trên xe bị
                lỗi khiến không nhận diện được smartkey.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Mất hoặc làm mất tất cả chìa khóa
              </h3>
              <p className="text-gray-700 mb-4">
                Đây là tình huống khó xử lý nhất, đặc biệt với các xe đời mới sử
                dụng chìa khóa có chip mã hóa. Việc làm lại chìa khóa không chỉ
                đơn giản là cắt một chìa mới mà còn cần lập trình chip đúng mã
                của xe.
              </p>

              <div className="min-h-[16rem] aspect-[3/2] w-full max-w-4xl mx-auto relative mb-6 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/oto2.png"
                  alt="Các loại khóa ô tô"
                  fill
                  className="object-cover md:object-contain"
                  priority
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
                  <li>
                    Đảm bảo vô-lăng không ở chế độ khóa (thử xoay nhẹ vô-lăng
                    khi xoay chìa)
                  </li>
                  <li>Xịt một lượng nhỏ dầu bôi trơn vào ổ khóa</li>
                  <li>Đợi 1-2 phút để dầu thấm vào</li>
                  <li>Nhẹ nhàng xoay chìa khóa qua lại vài lần</li>
                  <li>Tránh dùng lực quá mạnh để tránh gãy chìa khóa</li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Xử lý khi remote không hoạt động
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Vật liệu cần chuẩn bị:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>
                    Pin mới (CR2025, CR2032 hoặc theo loại pin của remote)
                  </li>
                  <li>Tua vít nhỏ</li>
                  <li>Cồn và bông tăm (để làm sạch mạch)</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  <strong>Các bước thực hiện:</strong>
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Tháo vỏ remote theo hướng dẫn sử dụng</li>
                  <li>Thay pin mới, đảm bảo đúng cực (+/-)</li>
                  <li>Kiểm tra và làm sạch các điểm tiếp xúc</li>
                  <li>Kiểm tra độ nguyên vẹn của mạch</li>
                  <li>Lắp lại và thử hoạt động</li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Đồng bộ lại smartkey với xe
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Lưu ý:</strong> Quy trình đồng bộ khác nhau tùy theo
                  hãng xe và đời xe. Dưới đây là quy trình tổng quát:
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Kiểm tra pin của smartkey, thay nếu cần</li>
                  <li>Ngồi vào xe và đóng tất cả các cửa</li>
                  <li>
                    Nhấn giữ nút khóa và mở khóa trên smartkey cùng lúc trong 5
                    giây
                  </li>
                  <li>
                    Đối với một số xe, bạn cần đặt smartkey vào vị trí đặc biệt
                    (thường là ngăn đựng cốc hoặc gần nút bấm khởi động)
                  </li>
                  <li>
                    Một số xe đời mới cần thực hiện quy trình đặc biệt theo
                    hướng dẫn sử dụng
                  </li>
                </ol>
                <p className="text-gray-700 mt-2">
                  <strong>Quan trọng:</strong> Nếu không chắc chắn, hãy tham
                  khảo sách hướng dẫn sử dụng xe hoặc liên hệ đại lý.
                </p>
              </div>

              <p className="text-gray-700 mt-6 italic">
                <strong>Lưu ý:</strong> Những hướng dẫn trên chỉ phù hợp với các
                vấn đề cơ bản. Với các tình huống phức tạp hơn như chìa khóa gãy
                trong ổ khóa, làm lại chìa khi mất hoàn toàn, hoặc sửa hệ thống
                khóa điện tử bị hỏng, bạn nên tìm đến thợ khóa chuyên nghiệp.
              </p>
            </div>

            {/* Section 3: Maintenance */}
            <div id="maintenance" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                3. Cách bảo dưỡng khóa ô tô định kỳ
              </h2>

              <p className="text-gray-700 mb-4">
                Bảo dưỡng định kỳ giúp kéo dài tuổi thọ và đảm bảo hoạt động
                trơn tru của hệ thống khóa ô tô. Dưới đây là lịch trình bảo
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
                        3 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Kiểm tra pin remote/smartkey, thay nếu điện yếu
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        6 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Bôi trơn ổ khóa cửa và khóa điện với dầu chuyên dụng
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        12 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Kiểm tra toàn diện tình trạng các ổ khóa và hệ thống
                        điện
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        24 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Làm thêm chìa khóa dự phòng (nếu chưa có hoặc chỉ còn 1
                        chìa)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Mẹo bảo quản chìa khóa ô tô:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>
                  Tránh để chìa khóa tiếp xúc với nước, đặc biệt là nước biển
                </li>
                <li>
                  Không để chìa khóa gần thiết bị điện tử mạnh có thể gây nhiễu
                </li>
                <li>Tránh va đập mạnh làm hỏng linh kiện điện tử bên trong</li>
                <li>
                  Luôn có ít nhất 2 chìa khóa dự phòng và cất giữ ở nơi an toàn
                </li>
                <li>
                  Đối với smartkey, tránh để gần điện thoại, laptop vì có thể
                  gây hao pin
                </li>
                <li>Không treo quá nhiều phụ kiện nặng vào chìa khóa</li>
              </ul>

              <div className="min-h-[16rem] aspect-[3/2] w-full max-w-4xl mx-auto relative mb-6 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/oto3.png"
                  alt="Các loại khóa ô tô"
                  fill
                  className="object-cover md:object-contain"
                  priority
                />
              </div>
            </div>

            {/* Section 4: Professional Help */}
            <div id="professional-help" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                4. Khi nào nên gọi thợ khóa ô tô chuyên nghiệp
              </h2>

              <p className="text-gray-700 mb-4">
                Mặc dù có thể tự xử lý một số vấn đề đơn giản, nhưng nhiều
                trường hợp cần đến sự trợ giúp của thợ khóa chuyên nghiệp:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-red-700">
                    Tình huống khẩn cấp
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Chìa khóa bị gãy trong ổ khóa</li>
                    <li>Mất tất cả chìa khóa của xe</li>
                    <li>Bị khóa ngoài xe khi chìa còn bên trong</li>
                    <li>
                      Ổ khóa hoàn toàn không xoay được dù đã thử các biện pháp
                    </li>
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
                    <li>
                      Cần làm lại hoàn toàn chìa khóa có chip (immobilizer)
                    </li>
                    <li>Lập trình lại hệ thống khóa thông minh</li>
                    <li>Thay thế toàn bộ ổ khóa điện</li>
                    <li>Sửa chữa hệ thống điện liên quan đến khóa</li>
                    <li>Cài đặt thêm hệ thống khóa chống trộm cao cấp</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Tiêu chí chọn thợ khóa ô tô uy tín:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Có chuyên môn và kinh nghiệm với đúng loại xe của bạn</li>
                <li>
                  Sở hữu thiết bị chuyên dụng để lập trình chìa khóa có chip
                </li>
                <li>Cung cấp bảo hành cho dịch vụ</li>
                <li>Có đánh giá tốt từ khách hàng trước đó</li>
                <li>Minh bạch về chi phí trước khi thực hiện công việc</li>
                <li>Có dịch vụ hỗ trợ khẩn cấp 24/7</li>
              </ul>

              <div className="p-4 bg-yellow-50 rounded-lg mb-6">
                <p className="text-gray-700 mb-2">
                  <strong className="text-yellow-700">
                    Chi phí tham khảo:
                  </strong>{" "}
                  Giá dịch vụ sửa khóa ô tô dao động rất lớn tùy theo loại xe và
                  vấn đề cụ thể:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Mở cửa xe khi bị khóa ngoài: 300.000đ - 700.000đ</li>
                  <li>Làm chìa khóa cơ thông thường: 200.000đ - 500.000đ</li>
                  <li>Làm chìa khóa có chip đơn giản: 600.000đ - 1.500.000đ</li>
                  <li>
                    Làm lại smartkey khi mất hoàn toàn: 1.500.000đ - 5.000.000đ
                  </li>
                  <li>Thay thế ổ khóa điện: 1.000.000đ - 3.000.000đ</li>
                </ul>
                <p className="text-gray-700 mt-2 italic">
                  Giá có thể cao hơn đối với xe hạng sang hoặc những trường hợp
                  đặc biệt phức tạp.
                </p>
              </div>
            </div>

            {/* Section 5: Lock Types */}
            <div id="lock-types" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                5. Các loại khóa ô tô hiện đại và đặc điểm
              </h2>

              <p className="text-gray-700 mb-6">
                Hiểu rõ về loại khóa trên xe giúp bạn có phương án bảo dưỡng và
                xử lý sự cố phù hợp:
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
                          <li>Không có chip điện tử</li>
                          <li>Phổ biến trên xe đời cũ</li>
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
                        Khóa có Remote
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Có remote điều khiển từ xa</li>
                          <li>Chìa vẫn dùng để khởi động</li>
                          <li>Phổ biến từ 2000-2015</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Tiện lợi khi
                        đóng/mở cửa
                        <br />
                        <span className="text-green-600">+</span> Bảo mật khá
                        tốt
                        <br />
                        <span className="text-red-600">-</span> Phụ thuộc pin
                        remote
                        <br />
                        <span className="text-red-600">-</span> Remote dễ hỏng
                        khi va đập
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa có Immobilizer
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Chìa có chip giao tiếp với ECU</li>
                          <li>Xe không khởi động nếu không có chìa đúng</li>
                          <li>Phổ biến từ 2005 đến nay</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Bảo mật cao
                        <br />
                        <span className="text-green-600">+</span> Chống trộm
                        hiệu quả
                        <br />
                        <span className="text-red-600">-</span> Khó và đắt khi
                        làm lại chìa
                        <br />
                        <span className="text-red-600">-</span> Có thể gặp lỗi
                        khi chip hỏng
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Smartkey
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Không cần cắm chìa để khởi động</li>
                          <li>Chỉ cần mang theo bên người</li>
                          <li>Phổ biến trên xe đời mới, cao cấp</li>
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
                        <span className="text-red-600">-</span> Phức tạp khi gặp
                        sự cố
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa điện thoại (Digital Key)
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Sử dụng điện thoại làm chìa khóa</li>
                          <li>Kết nối qua yellowtooth/NFC</li>
                          <li>Mới xuất hiện trên xe sang đời mới nhất</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Cực kỳ hiện
                        đại và tiện lợi
                        <br />
                        <span className="text-green-600">+</span> Chia sẻ quyền
                        truy cập dễ dàng
                        <br />
                        <span className="text-red-600">-</span> Phụ thuộc pin
                        điện thoại
                        <br />
                        <span className="text-red-600">-</span> Rủi ro bảo mật
                        cao nếu bị hack
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Lời khuyên khi lựa chọn hệ thống khóa cho ô tô:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>
                  Xe đời cũ: Cân nhắc nâng cấp lên hệ thống có remote và
                  immobilizer để tăng bảo mật
                </li>
                <li>
                  Luôn làm ít nhất 2-3 chìa khóa dự phòng ngay khi mua xe mới
                </li>
                <li>
                  Đối với xe sử dụng smartkey, nên có ít nhất một chìa dự phòng
                </li>
                <li>
                  Cân nhắc lắp thêm hệ thống chống trộm bổ sung cho xe đắt tiền
                </li>
                <li>
                  Lưu lại mã số khóa (key code) của xe để dễ dàng làm chìa khi
                  cần
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                Kết Luận
              </h2>

              <p className="text-gray-700 mb-4">
                Hệ thống khóa ô tô ngày càng phát triển với công nghệ hiện đại,
                mang lại sự tiện lợi và an toàn cho người sử dụng. Tuy nhiên,
                càng hiện đại thì việc sửa chữa và thay thế càng trở nên phức
                tạp và tốn kém.
              </p>
              <p className="text-gray-700 mb-4">
                Việc hiểu rõ về loại khóa trên xe của bạn, thực hiện bảo dưỡng
                định kỳ và biết cách xử lý các vấn đề cơ bản sẽ giúp bạn tiết
                kiệm thời gian, chi phí và tránh những tình huống khó xử. Đặc
                biệt, việc luôn có chìa khóa dự phòng là biện pháp đơn giản
                nhưng hiệu quả nhất để phòng tránh rủi ro.
              </p>
              <p className="text-gray-700 mb-4">
                Đối với những vấn đề phức tạp, đừng ngần ngại tìm đến sự trợ
                giúp của thợ khóa ô tô chuyên nghiệp để tránh làm hỏng thêm hệ
                thống khóa của xe.
              </p>

              <div className="p-4 bg-yellow-50 rounded-lg mt-6">
                <p className="text-gray-700 italic">
                  <strong>Lưu ý:</strong> Thông tin trong bài viết này chỉ mang
                  tính chất tham khảo. Đối với các vấn đề cụ thể về khóa ô tô,
                  hãy luôn tham khảo sách hướng dẫn sử dụng xe hoặc liên hệ với
                  đại lý, thợ khóa chuyên nghiệp để được tư vấn phù hợp.
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
                      Chi phí làm lại chìa khóa ô tô khi mất hoàn toàn là bao
                      nhiêu?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Chi phí làm lại chìa khóa ô tô khi mất hoàn toàn phụ thuộc
                      vào loại xe và loại khóa. Đối với xe đời cũ dùng chìa cơ,
                      chi phí khoảng 200.000đ - 500.000đ. Với xe có chìa khóa có
                      chip, chi phí từ 1.000.000đ - 3.000.000đ. Xe dùng
                      smartkey, chi phí có thể lên đến 2.000.000đ - 6.000.000đ
                      hoặc cao hơn đối với xe sang. Bạn nên liên hệ đại lý hoặc
                      thợ khóa chuyên nghiệp để được báo giá chính xác.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Làm thế nào khi bị khóa ngoài xe với chìa bên trong?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Khi bị khóa ngoài xe với chìa bên trong, tuyệt đối không
                      nên cố tự mở cửa bằng các vật nhọn sẽ làm hỏng gioăng cửa
                      và hệ thống khóa. Cách xử lý tốt nhất là: (1) Gọi thợ khóa
                      ô tô chuyên nghiệp - đây là phương án an toàn nhất, (2)
                      Liên hệ dịch vụ cứu hộ của hãng xe nếu xe đang trong thời
                      gian bảo hành, (3) Sử dụng ứng dụng điều khiển từ xa nếu
                      xe hỗ trợ. Chi phí mở cửa xe khi bị khóa ngoài thường từ
                      300.000đ - 800.000đ.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Smartkey không hoạt động dù đã thay pin phải làm sao?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Khi smartkey không hoạt động dù đã thay pin, hãy thử các
                      cách sau: (1) Kiểm tra đúng loại pin và lắp đúng cực, (2)
                      Làm sạch các điểm tiếp xúc bên trong smartkey, (3) Thử đặt
                      smartkey vào vị trí đặc biệt trên xe (thường là hộc cốc)
                      để khởi động khẩn cấp, (4) Thử quy trình đồng bộ lại
                      smartkey theo hướng dẫn của xe, (5) Kiểm tra xem có bị
                      nhiễu tín hiệu do gần thiết bị điện tử khác không. Nếu vẫn
                      không được, có thể smartkey đã bị hỏng mạch điện bên trong
                      và cần được thay thế hoặc sửa chữa bởi chuyên gia.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Có nên lắp khóa chống trộm bổ sung cho ô tô?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Việc lắp khóa chống trộm bổ sung rất hữu ích cho những xe
                      đời cũ có hệ thống bảo mật thấp hoặc xe đắt tiền thường là
                      mục tiêu của trộm cắp. Các loại khóa chống trộm phổ biến
                      bao gồm: khóa cần số, khóa vô-lăng, khóa chân phanh, hệ
                      thống định vị GPS, hệ thống cắt điện thông minh. Tuy
                      nhiên, cần lắp đặt tại cơ sở uy tín để đảm bảo không ảnh
                      hưởng đến hệ thống điện và vận hành của xe. Chi phí lắp
                      đặt từ 500.000đ đến vài triệu đồng tùy loại, nhưng đây là
                      khoản đầu tư xứng đáng để bảo vệ tài sản giá trị của bạn.
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
                    Sửa Khóa Két Sắt
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ sửa khóa két sắt, mở khóa két sắt
                  </p>
                  <a
                    href="/sua-khoa-ket"
                    className="text-yellow-600 hover:text-yellow-800 font-medium"
                  >
                    Tìm hiểu thêm
                  </a>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
