// groq is just a tagged template literal for syntax highlighting — plain strings work fine
const groq = String.raw;

// ---------------------------------------------------------------------------
// Site Settings
// ---------------------------------------------------------------------------

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    siteName,
    logo,
    tagline,
    contactEmail,
    contactPhone,
    address,
    openingHours[]{
      day,
      open,
      close,
      closed
    },
    socialLinks[]{
      platform,
      url
    },
    defaultSeo{
      title,
      description,
      ogImage
    }
  }
`;

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

const treatmentSectionsFragment = groq`
  treatmentSections[]{
    _key,
    heading,
    body,
    image
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(featured desc, title asc){
    _id,
    title,
    slug,
    excerpt,
    image,
    ${treatmentSectionsFragment},
    body,
    price,
    duration,
    featured,
    seo
  }
`;

export const featuredServicesQuery = groq`
  *[_type == "service" && featured == true] | order(title asc)[0...6]{
    _id,
    title,
    slug,
    excerpt,
    image,
    price,
    duration,
    featured
  }
`;

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    image,
    ${treatmentSectionsFragment},
    body,
    price,
    duration,
    featured,
    seo
  }
`;

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------

export const pagesQuery = groq`
  *[_type == "page"]{
    _id,
    title,
    slug,
    hero,
    body,
    seo
  }
`;

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    hero,
    carouselImages[]{
      image,
      alt
    },
    body,
    seo
  }
`;

// ---------------------------------------------------------------------------
// Team Members
// ---------------------------------------------------------------------------

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc){
    _id,
    name,
    role,
    photo,
    bio,
    quote,
    specialisms,
    qualifications,
    order
  }
`;

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export const testimonialsQuery = groq`
  *[_type == "testimonial"]{
    _id,
    quote,
    author,
    rating,
    service->{title}
  }
`;

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------

export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    categories,
    seo
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    body,
    excerpt,
    coverImage,
    publishedAt,
    categories,
    seo
  }
`;

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

export const faqsQuery = groq`
  *[_type == "faq"] | order(category asc, order asc){
    _id,
    question,
    answer,
    category,
    service,
    order
  }
`;

// ---------------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------------

export const galleryPostsQuery = groq`
  *[_type == "galleryPost" && consentGiven == true] | order(coalesce(order, 9999) asc, publishedAt desc){
    _id,
    postType,
    image,
    beforeImage,
    afterImage,
    caption,
    treatment,
    publishedAt
  }
`;
