import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-[120px] px-6 md:px-10 bg-cream">
      <div className="max-w-[900px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-[#3D7C47] mb-12 font-semibold">
          About
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">
          {/* Profile image — circular crop */}
          <div className="shrink-0">
            <div className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-4 border-linen shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/portfolio/tina-s-profile-pic-2025-2-dOqD394V1VsyO441.avif"
                alt="Tina Brenkus"
                width={520}
                height={520}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-6 text-[17px] leading-[1.8] text-med font-editorial text-center md:text-left">
            <p>
              What started as a teen dream giving tours of The Tonight Show at
              NBC in Burbank turned into a writing career creating short-form
              video for live entertainment television broadcasts.
            </p>
            <p>And led to creating content for brands big and small.</p>
            <p>
              From Dallas to Los Angeles, New York and Minneapolis I&rsquo;m now
              a native AI writer and vibe coder who can wield Claude like a
              well-oiled machine and launch products as a wild-one-woman band.
            </p>
            <p>
              I live in Texas on the family ranch, grazing cattle, tackling a
              large garden, hoping to grow food and flowers and make the world a
              better place (one baby step at a time).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
