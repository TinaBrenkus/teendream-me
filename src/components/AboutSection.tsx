import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-[120px] px-6 md:px-10 bg-cream">
      <div className="max-w-[900px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-accent mb-12 font-semibold">
          About
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">
          {/* Profile image — circular crop */}
          <div className="shrink-0">
            <div className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-4 border-linen shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/portfolio/TinaBrenkusProfilePicOrange.jpg"
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
            <p>
              And led to creating content for brands big and small.
            </p>
            <p>
              From Dallas to Los Angeles, New York and Minneapolis I&rsquo;m an
              experienced writer who can wield AI to operate like a well-oiled
              machine and launch products with authenticity that can only come
              from a thoughtful human.
            </p>
            <p>
              I live in Texas, love the great outdoors, long walks on the ranch,
              and am making a serious attempt to call myself a gardener.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
